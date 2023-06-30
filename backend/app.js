const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: "backend/config/config.env" });

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using MiddleWares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// importing routes

const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes

app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
