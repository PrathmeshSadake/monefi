const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  // console.log(req.headers.authorization);
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decodedToken.userId;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Authentication failed" });
  }
};
