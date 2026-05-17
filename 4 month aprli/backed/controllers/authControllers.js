const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

// ---------------- REGISTER ----------------
const register = async (req, res) => {
  try {
    const { name, email, password, city, mobileNo } = req.body;

    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "This Email Id Already Registered"
      });
    }

    const user = await Users.create({
      name,
      email,
      password,
      city,
      mobileNo
    });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "30d" }
    );

    res.status(201).json({
      message: "Register Successful",
      data: user,
      token
    });

  } catch (error) {
    res.status(500).json({
      message: "Register Error",
      error: error.message
    });
  }
};

// ---------------- LOGIN ----------------
const login = async (req, res) => {
  try {
   
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required"
      });
    }

    const user = await Users.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      message: "Login Error",
      error: error.message
    });
  }
};

module.exports = { register, login };