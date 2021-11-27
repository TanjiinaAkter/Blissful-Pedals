const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const isAuthenticatedAdmin = () => {
  return async (req, res, next) => {
    const token = req.headers["x-admin-auth-token"];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Permission denied for missing token!" });
    }
    try {
      const { email } = jwt.verify(token, process.env.API_SECRET_KEY);
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res
          .status(401)
          .json({ message: "Permission denied for invalid token" });
      }
      req.admin = admin;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
};
module.exports = isAuthenticatedAdmin;
