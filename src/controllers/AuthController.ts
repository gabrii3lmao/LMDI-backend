import type { Request, Response } from "express";
import { User } from "../models/User/UserModel.js";
import bcrypt from "bcrypt";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { first, last, email, password } = req.body;

      if (!first || !last || !email || !password) {
        return res.status(400).json({
          error: "Missing required fields",
        });
      }

      if (typeof password !== "string" || password.length < 8) {
        return res.status(400).json({
          error: "Password must have at least 8 characters",
        });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          error: "E-mail already registered",
        });
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const user = await User.create({
        name: { first, last },
        email,
        passwordHash,
      });

      res.status(201).json({
        message: "User created successfully",
        user: {
          id: user._id,
          name: user.fullName,
          role: user.role,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          error: "E-mail and password are required",
        });
      }

      const user = await User.findOne({ email }).select("+passwordHash");

      if (!user) {
        return res.status(401).json({
          error: "E-mail or password is invalid",
        });
      }

      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
        return res.status(401).json({
          error: "E-mail or password is invalid",
        });
      }

      req.session.userId = user._id.toString();

      res.json({
        message: "Login successful",
        user: {
          name: user.fullName,
          role: user.role,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }

  static async logout(req: Request, res: Response) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          error: "Could not logout",
        });
      }

      res.clearCookie("connect.sid");
      res.json({ message: "Logout successful" });
    });
  }
}
