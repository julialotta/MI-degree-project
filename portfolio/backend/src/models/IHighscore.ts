import { ObjectId } from "mongoose";

export interface IHighscore {
  _id: ObjectId;
  name: string;
  score: number;
}
