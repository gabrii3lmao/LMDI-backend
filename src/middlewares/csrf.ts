import crypto from "crypto";
import type { Request, Response, NextFunction } from "express";

export function ensureCsrfToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session.csrfToken) {
    req.session.csrfToken = crypto.randomBytes(32).toString("hex");
  }
  next();
}

export function verifyCsrfToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["x-csrf-token"];

  if (!token || token !== req.session.csrfToken) {
    return res.status(403).json({ error: "Invalid CSRF token" });
  }
  next();
}
