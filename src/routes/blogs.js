const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/BlogController");
const authenticate = require("../middleware/authenticate");

router.post("/add", authenticate, ProductController.addBlogs);
router.put("/update", authenticate, ProductController.updateBlogs);
router.get("/get", authenticate, ProductController.getAllBlogs);
router.delete("/delete", authenticate, ProductController.deleteBlogs);
router.get("/my-blogs", authenticate, ProductController.getMyBlogs);

// Add comment route
router.post("/comment", authenticate, ProductController.updateComment);

// Get comments for a specific blog
router.get("/comment/:blogId", authenticate, ProductController.getComment);

module.exports = router;
