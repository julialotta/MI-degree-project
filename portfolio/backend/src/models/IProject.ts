import { ObjectId } from "mongoose";

export interface IProject {
  _id: ObjectId;
  name: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  tag: string;
}
