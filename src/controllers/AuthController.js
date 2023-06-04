const { User, Token } = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// user register
const register = (req, res, next) => {
  console.log(res);

  // Hash the password
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      });

      user
        .save()
        .then((result) => {
          res.json({
            message: "User registered successfully",
          });
        })
        .catch((error) => {
          res.json({
            error: error.message,
          });
        });
    }
  });
};

// login
const login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ $or: [{ email: email }] }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          return res.status(400).json({
            error: err.message,
          });
        }
        if (result) {
          const access_token = jwt.sign(
            {
              name: user.name,
              unique_id: Math.random().toString(36).substr(2),
            },
            "secretValue",
            {
              expiresIn: "2h",
            }
          );

          const refresh_token = jwt.sign(
            {
              name: user.name,
              unique_id: Math.random().toString(36).substr(2),
            },
            "secretrefreshValue",
            {
              expiresIn: "2h",
            }
          );

          const expires_in = new Date(Date.now() + 3600 * 1000);

          const token = new Token({
            access_token: access_token,
            refresh_token: refresh_token,
            expires_in: expires_in,
          });

          token
            .save()
            .then((result) => {
              return res
                .status(200)
                .header("access_token", access_token)
                .header("Access-Control-Expose-Headers", "*")
                .set("refresh_token", refresh_token)
                .set("expires_in", expires_in)
                .json(user);
            })
            .catch((error) => {
              return res.status(400).json({
                error: error.message,
              });
            });
        } else {
          return res.status(400).json({
            error: "Password does not match!",
          });
        }
      });
    } else {
      return res.status(400).json({
        error: "No user found",
      });
    }
  });
};

// update user details
const updateuser = (req, res, next) => {
  const userId = req.body.userId;

  const updatedData = {
    name: req.body.name,
    phone: req.body.phone,
  };

  User.findByIdAndUpdate(userId, { $set: updatedData })
    .then(() => {
      res.json({
        message: "user updated successfuly!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

module.exports = {
  register,
  login,
  updateuser,
};
