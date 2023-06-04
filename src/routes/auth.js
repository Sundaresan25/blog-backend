const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

const authenticate = require("../middleware/authenticate");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// Update user route
router.put("/updateuser", authenticate, AuthController.updateuser);

module.exports = router;
