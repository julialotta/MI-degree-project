import mongoose from "mongoose";
import { IHighscore } from "./IHighscore";

const HighscoreSchema = new mongoose.Schema<IHighscore>({
  name: {
    type: String,
    // required: true,
  },
  score: {
    type: Number,
    // required: true,
  },
});

export const HighscoreModel = mongoose.model<IHighscore>(
  "Highscore",
  HighscoreSchema
);
