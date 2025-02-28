import { json } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { fullName, password, email } = req.body;

    // check all fields
    if (!fullName || !password || !email) {
      res.status(400),
        json({
          success: false,
          message: "Please fill all the fields",
        });
    }

    //check user already registerd or not

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashpassword,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check email , password is match or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalide email or password!",
      });
    }
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalide Password",
      });
    }
    //token
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
   

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "Strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: `Login Successfully! Welcome Back ${user.fullName}`,
        user,
      });
  } catch (error) {
    console.log(error);

  }
};

const logout = async (_, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "Logout Successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};

export { register, login, logout };
