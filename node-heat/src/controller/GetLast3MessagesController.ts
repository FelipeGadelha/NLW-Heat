import { Request, Response } from "express";
import { Getlast3MessagesService } from "../service/GetLast3MessagesService";

class Getlast3MessagesController {

  async handle(req: Request, res: Response) {
    const result = await new Getlast3MessagesService().execute();
    return res.json(result);
  }
}

export { Getlast3MessagesController };