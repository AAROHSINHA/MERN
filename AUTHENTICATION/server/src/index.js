const express = require("express");
const mongoose = require("mongoose");
const router = require("./localRoute.js");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express(); // Initializing the expressjs application
const PORT = 3000;
const MONGOOSE_URL = "mongodb://localhost:27017";

// SIMPLE MONGOOSE CONNECTION
async function connectToDB() {
  try {
    await mongoose.connect(MONGOOSE_URL, {
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO MONGOOSE");
  } catch (error) {
    console.warn("ERROR CONNECTING TO MONGOOSE!");
    console.log(error);
  }
}
connectToDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(
  session({
    secret: "1234ABCDDCBA4321",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGOOSE_URL,
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      maxAge: 60 * 30 * 40,
    },
  })
);
app.use(router);

// Simple get request
app.get("/", (request, response) => {
  response.send("Hello. App is running");
});

// connecting to the PORT
app.listen(PORT, () => {
  console.log(`APPLICATION STARTED ON PORT ${PORT}`);
});
