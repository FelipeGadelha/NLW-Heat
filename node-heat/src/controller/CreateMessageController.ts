import { Request, Response } from "express";
import { CreateMessageService } from "../service/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;
    const result = await new CreateMessageService().execute(message, user_id);
    return res.json(result);
  }
}

export { CreateMessageController };