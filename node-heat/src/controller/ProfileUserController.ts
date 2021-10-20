import { Request, Response } from "express";
import { ProfileUserService } from "../service/ProfileUserService";

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const result = await new ProfileUserService().execute(user_id);
    return res.json(result);
  }
}

export { ProfileUserController };