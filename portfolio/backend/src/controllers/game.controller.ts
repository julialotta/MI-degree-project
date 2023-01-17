import { Request, Response } from "express";
import { HighscoreModel } from "../models/Highscore.model";
import { statusFailed, statusSuccess } from "./statusMessages";

export const post_newHighscore = async (req: Request, res: Response) => {
  try {
    const { name, score } = req.body;

    const postNewHighscore = new HighscoreModel({
      name,
      score,
    });

    const addedScore = await postNewHighscore.save();
    res.status(200).json({
      status: statusSuccess,
      message: "New booking added to DB",
      data: addedScore,
    });
  } catch (error: any) {
    res.status(500).json({
      status: statusFailed,
      message: error,
    });
  }
};

export const get_highscore = async (req: Request, res: Response) => {
  console.log("körs");
  res.send(200);
};
