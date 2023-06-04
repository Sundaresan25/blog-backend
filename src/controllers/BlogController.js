const { Blogs, Comment } = require("../models/Blogs");

// get All blogs
const getAllBlogs = (req, res, next) => {
  Blogs.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

// get user personal blogs
const getMyBlogs = (req, res, next) => {
  const { id } = req.params;

  Blogs.find({ userId: id }) // Assuming the userId field in the Blogs collection represents the user's ID
    .then((response) => {
      res.status(200).json({
        data: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

// add blog
const addBlogs = (req, res, next) => {
  const blogs = new Blogs({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    userId: req.body.userId,
  });

  blogs
    .save()
    .then((respnse) => {
      res.json({
        message: "Blog Added Successfully",
      });
    })
    .catch((error) => {
      res.json({
        error: error.message,
      });
    });
};

// update blog
const updateBlogs = (req, res, next) => {
  const updatedData = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    userId: req.body.userId,
  };

  Blogs.findByIdAndUpdate(req.body._id, { $set: updatedData })
    .then(() => {
      res.json({
        message: "Blog updated successfuly!",
      });
    })
    .catch((error) => {
      res.json({
        error: error.message,
      });
    });
};

// delete blog
const deleteBlogs = (req, res, next) => {
  const id = req.body.id;
  Blogs.findByIdAndRemove(id)
    .then(() => {
      res.json({
        message: "Blog deleted successfully!",
      });
    })
    .catch((error) => {
      res.json({
        error: error.message,
      });
    });
};

// adding comment
const addComment = (req, res, next) => {
  const { content, author, authorMail, blogId } = req.body;
  const newComment = new Comment({
    content,
    author,
    authorMail,
    blogId,
  });

  newComment
    .save()
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create comment" });
    });
};

// update comment
const updateComment = (req, res, next) => {
  const { content, author, authorMail, blogId } = req.body;
  const newComment = new Comment({
    content,
    author,
    authorMail,
    blogId,
  });

  newComment
    .save()
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create comment" });
    });
};

// delete comment
const deleteComment = (req, res, next) => {
  const id = req.body.id;
  Comment.findByIdAndRemove(id)
    .then(() => {
      res.json({
        message: "Blog deleted successfully!",
      });
    })
    .catch((error) => {
      res.json({
        error: error.message,
      });
    });
};

// get comment based blog id
const getComment = (req, res, next) => {
  const { blogId } = req.params;

  Comment.find({ blogId })
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to retrieve comments" });
    });
};

module.exports = {
  getAllBlogs,
  getMyBlogs,
  addBlogs,
  updateBlogs,
  deleteBlogs,
  addComment,
  updateComment,
  deleteComment,
  getComment,
};
