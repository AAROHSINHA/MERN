const express = require("express");
const express_validator = require("express-validator");
const User = require("./userModel.js");
const { LocalSignInSchema } = require("./ValidationSchemas.js");
const { LocalLoginSchema } = require("./ValidationSchemas.js");
const bcrypt = require("bcrypt");

const router = express.Router();

// global variables
const saltRounds = 10;

// validation middleware
const validationErrorMiddleware = (request, response, next) => {
  const validation_results = express_validator.validationResult(request);
  if (!validation_results.isEmpty()) {
    return response.status(400).json({
      message: "validation",
      error: validation_results.array(),
    });
  }
  next();
};

// 0. get user details
router.get("/users/get-user", async (request, response) => {
  if (!request.session) {
    return response.status(500).json({
      message: "Server Error!",
    });
  }

  if (request.session.userId) {
    const userName = request.session.user.username;
    const userEmail = request.session.user.email;
    return response.status(200).json({
      username: userName,
      email: userEmail,
    });
  } else {
    return response.status(500).json({
      message: "Server Error!",
    });
  }
});

// 1. sign in
router.post(
  "/users/create-account",
  express_validator.checkSchema(LocalSignInSchema),
  validationErrorMiddleware,
  async (request, response) => {
    const data = express_validator.matchedData(request);
    const username = data.username;
    const email = data.email;
    const password = data.password;
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, saltRounds);
    } catch (error) {
      return response.status(503).json({
        message: "server",
        error: error,
      });
    }

    try {
      const userData = {
        username: username,
        email: email,
        password: hashedPassword,
      };
      const newUser = new User(userData);
      await newUser.save();
      return response.status(201).json({
        message: "success",
      });
    } catch (error) {
      return response.status(500).json({
        message: "server",
        error: error,
      });
    }
  }
);

// 2. local login
router.post(
  "/users/local-login",
  express_validator.checkSchema(LocalLoginSchema),
  validationErrorMiddleware,
  async (request, response) => {
    const data = express_validator.matchedData(request);
    const email = data.email;
    const password = data.password;

    try {
      const foundUser = await User.findOne({ email: email });
      if (!foundUser) {
        return response.status(404).json({
          message: "user not found!",
        });
      }
      const originalPassword = foundUser.password;
      const isPasswordCorrect = await bcrypt.compare(
        password,
        originalPassword
      );
      if (!isPasswordCorrect) {
        return response.status(404).json({
          message: "Wrong Password",
        });
      }

      // now if password is correct
      request.session.userId = foundUser.id;
      request.session.user = {
        username: foundUser.username,
        email: foundUser.email,
      };

      return response.status(200).json({
        message: "success",
        username: foundUser.username,
        email: foundUser.email,
      });
    } catch (error) {
      return response.status(500).json({
        message: "server",
        error: error,
      });
    }
  }
);

module.exports = router;
