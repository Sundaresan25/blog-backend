const jwt = require("jsonwebtoken");

// Middleware function to authenticate the token
const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticate;
