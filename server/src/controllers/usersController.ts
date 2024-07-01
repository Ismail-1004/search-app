import { Request, Response, NextFunction } from "express";
import ApiError from "../error/ApiError";
import userService from "../service/user-service";


class UsersController {
  async search(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, number }: { email: string; number?: string } = req.body;

      const userData = await userService.searchUser(email, number)

      res.status(200).json(userData);
    } catch (e) {
      console.log(e);
      next(ApiError.internal('Ошибка при запросе'));
    }
  }
}

export default new UsersController();
