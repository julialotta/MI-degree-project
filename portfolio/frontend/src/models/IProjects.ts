export interface IProjects {
  _id: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  tag: string;
}
