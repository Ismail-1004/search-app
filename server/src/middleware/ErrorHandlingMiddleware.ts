import { Request, Response, NextFunction } from 'express';
import ApiError from "../error/ApiError";

export default function (err: any, req: Request, res: Response, next: NextFunction): Response | void {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  res.status(500).json({ message: "Непредвиденная ошибка!" })
}
