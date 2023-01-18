import { IHighscore } from "../../models/IHighscore";
import { IProjects } from "../../models/IProjects";
import { get } from "./handleAxiosRequests.service";

export async function fetchProjects(): Promise<IProjects[]> {
  const url: string = `${process.env.REACT_APP_PROJECTS_URI}`;
  return (await get<IProjects[]>(url)).data;
}

export async function fetchTech(): Promise<String[]> {
  const url: string = `${process.env.REACT_APP_TECH_URI}`;
  return (await get<String[]>(url)).data;
}

export async function fetchProjectByID(id: string): Promise<IProjects> {
  const url: string = `${process.env.REACT_APP_PROJECTSBYID_URI}/` + id;
  return (await get<IProjects>(url)).data;
}

export async function fetchHighscore(): Promise<IHighscore[]> {
  const url: string = `${process.env.REACT_APP_HIGHSCORE_URI}`;
  return (await get<IHighscore[]>(url)).data;
}
