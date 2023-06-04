const jwt = require("jsonwebtoken");

// Middleware function to authenticate the token
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, "secretValue");
    req.user = decode;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      res.status(401).json({
        message: "Token Expired",
      });
    }
    res.json({
      message: "Authentication failed!",
    });
  }
};

module.exports = authenticate;
