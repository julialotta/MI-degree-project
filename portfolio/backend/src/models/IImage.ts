import { ObjectId } from "mongoose";

export interface IImage {
  _id: ObjectId;
  name: string;
  image: string;
}
