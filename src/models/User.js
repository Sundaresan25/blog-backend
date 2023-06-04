const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 150,
    },
    email: {
      type: String,
      required: true,
      maxlength: 150,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

// Define the token schema
const tokenSchema = new Schema(
  {
    access_token: {
      type: String,
      required: true,
    },
    refresh_token: {
      type: String,
      required: true,
    },
    expires_in: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the Token model
const Token = mongoose.model("Token", tokenSchema);

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the models
module.exports = { User, Token };
