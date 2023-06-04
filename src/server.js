const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const AuthRoute = require("./routes/auth");
const BlogsRoute = require("./routes/blogs");

const uri =
  "mongodb+srv://Sundar:fYYeJCkNhtbJXI55@cluster0.actajyj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.on("open", (err) => {
  console.log("DB Established");
});

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors("*"));

// Logging middleware
app.use(morgan("dev"));

// Parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// Routes
app.use("/auth", AuthRoute);
app.use("/blogs", BlogsRoute);
