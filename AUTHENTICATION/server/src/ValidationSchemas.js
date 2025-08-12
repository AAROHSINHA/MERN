export const LocalSignInSchema = {
  username: {
    isString: { errorMessage: "Username must be a string" },
    notEmpty: { errorMessage: "Username cannot be empty" },
    isLength: {
      options: { min: 1, max: 128 },
      errorMessage: "Username must be between 1 and 128 characters long",
    },
    trim: true,
  },
  email: {
    isEmail: { errorMessage: "Please enter a valid email address" },
    notEmpty: { errorMessage: "Email cannot be empty" },
    normalizeEmail: true,
    trim: true,
  },
  password: {
    isString: { errorMessage: "Password must be a string" },
    notEmpty: { errorMessage: "Password cannot be empty" },
    isLength: {
      options: { min: 1, max: 128 },
      errorMessage: "Password must be between 1 and 128 characters long",
    },
    trim: true,
  },
};
export const LocalLoginSchema = {
  email: {
    isEmail: { errorMessage: "Please enter a valid email address" },
    notEmpty: { errorMessage: "Email cannot be empty" },
    normalizeEmail: true,
    trim: true,
  },
  password: {
    isString: { errorMessage: "Password must be a string" },
    notEmpty: { errorMessage: "Password cannot be empty" },
    isLength: {
      options: { min: 1, max: 128 },
      errorMessage: "Password must be between 1 and 128 characters long",
    },
    trim: true,
  },
};
