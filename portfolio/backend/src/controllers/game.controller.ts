import { Request, Response } from "express";
import { HighscoreModel } from "../models/Highscore.model";
import { statusFailed, statusSuccess } from "./statusMessages";

export const get_highscore = async (req: Request, res: Response) => {
  const scores = await HighscoreModel.find();
  scores.sort((a, b) => b.score - a.score);
  let top10 = [];

  if (scores.length > 10) {
    for (let i = 0; i < 10; i++) {
      top10.push(scores[i]);
    }
  } else {
    for (let i = 0; i < scores.length; i++) {
      top10.push(scores[i]);
    }
  }

  try {
    res.status(200).json(top10);
  } catch (error: any) {
    res.status(500).json({
      status: statusFailed,
      message: error,
    });
  }
};

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
