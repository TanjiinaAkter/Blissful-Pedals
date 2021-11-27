const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

exports.adminLoginPostController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });

    if (!admin || admin.password !== password) {
      return res.status(403).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign(
      { email, name: admin.name },
      process.env.API_SECRET_KEY
    );
    res.status(200).json({
      message: "Successfully logged!",
      token,
      isLoggedIn: true,
      admin: { name: admin.name, email: admin.email },
    });
  } catch (error) {
    console.log({error})
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.adminLoginVerify = async (req, res, next) => {
  const token = req.headers["x-admin-auth-token"];
  if (!token) {
    return res.status(401).json(false);
  }
  try {
    const { email } = jwt.verify(token, process.env.API_SECRET_KEY);
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json(false);
    }
    res.status(200).json({
      isLoggedIn: true,
      admin: { name: admin.name, email: admin.email },
    });
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.adminSignupPostController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });

    if (admin) {
      return res.status(403).json({
        message: "You have already created an account using this email",
      });
    }
    const createAdmin = new Admin({
      name,
      email,
      password,
    });
    const createdAdmin = await createAdmin.save();

    res.status(201).json({
      message: "Successfully created admin!",
      admin: createdAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllAdminsGetController = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({ admins });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteAdminsDeleteController = async (req, res) => {
  try {
    const { id } = req.params;

    await Admin.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Successfully deleted the admin" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
