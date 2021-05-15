const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

// body parser
app.use(express.json());

// enable cors
app.use(cors());

// cookie parser
app.use(cookieParser());

// mount routes

// error handler

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
