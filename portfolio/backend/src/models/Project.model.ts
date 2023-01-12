import mongoose from "mongoose";
import { IProject } from "./IProject";

const ProjectsSchema = new mongoose.Schema<IProject>({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  tech: {
    type: [],
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  link: {
    type: String,
    // required: true,
  },
  github: {
    type: String,
    // required: true,
  },
  tag: {
    type: String,
    // required: true,
  },
});

export const ProjectModel = mongoose.model<IProject>(
  "projects",
  ProjectsSchema
);
