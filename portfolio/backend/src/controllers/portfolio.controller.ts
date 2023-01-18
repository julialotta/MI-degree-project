import { Request, Response } from "express";
import { IProject } from "../models/IProject";
import { ProjectModel } from "../models/Project.model";
import { statusFailed, statusSuccess } from "./statusMessages";

export const get_portfolioProjectsController = async (
  req: Request,
  res: Response
) => {
  const projects = await ProjectModel.find();

  try {
    res.status(200).json(projects);
  } catch (error: any) {
    res.status(500).json({
      status: statusFailed,
      message: error,
    });
  }
};

export const get_portfolioProjectByIDController = async (
  req: Request,
  res: Response
) => {
  const projectById = await ProjectModel.findById(req.params.id);
  try {
    res.status(200).json(projectById);
  } catch (error: any) {
    res.status(500).json({
      status: statusFailed,
      message: error,
    });
  }
};

export const get_allTechController = async (req: Request, res: Response) => {
  const bookings = await ProjectModel.find();
  let array: string[] = [];

  for (let i = 0; i < bookings.length; i++) {
    for (let y = 0; y < bookings[i].tech.length; y++) {
      if (
        !array.find(
          (element) =>
            element ===
            bookings[i].tech[y].charAt(0).toUpperCase() +
              bookings[i].tech[y].slice(1)
        )
      ) {
        array.push(
          bookings[i].tech[y].charAt(0).toUpperCase() +
            bookings[i].tech[y].slice(1)
        );
      }
    }
  }

  try {
    res.status(200).json(array);
  } catch (error: any) {
    res.status(500).json({
      status: statusFailed,
      message: error,
    });
  }
};
