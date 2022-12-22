export interface IProjects {
  id: number;
  name: string;
  description: string;
  tech: ITech[];
  image: string;
  link?: string;
  tag: string;
}

export interface ITech {
  tech: string;
}
