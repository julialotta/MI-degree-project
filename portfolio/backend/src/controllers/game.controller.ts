import { Request, Response } from "express";

export const get_highscore = async (req: Request, res: Response) => {
  console.log(req);
  res.send(200);
};
export const post_newHighscore = async (req: Request, res: Response) => {
  console.log(req);
  res.send(200);
};
