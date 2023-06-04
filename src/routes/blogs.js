const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

const ProductController = require("../controllers/BlogController");
const authenticate = require("../middleware/authenticate");

router.post("/add", ProductController.addBlogs);
router.put("/update", ProductController.updateBlogs);
router.get("/get", ProductController.getAllBlogs);
router.delete("/delete", ProductController.deleteBlogs);
router.get("/my-blogs", ProductController.getMyBlogs);
router.post("/comment", ProductController.updateComment);
router.get("/comment/:blogId", ProductController.getComment);

module.exports = router;
