const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the blogs schema
const blogsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Define the comment schema
const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  authorMail: {
    type: String,
    required: true,
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blogs",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Comment model
const Comment = mongoose.model("Comment", commentSchema);

// Create the Blogs model
const Blogs = mongoose.model("Blogs", blogsSchema);

// Export the models
module.exports = {
  Blogs,
  Comment,
};
