import { IProjects } from "../models/IProjects";
// 1 work
// 2 School
// 3 other
export const projects: IProjects[] = [
  {
    id: 10,
    name: "Whodunit Geogames",
    description: "An app built in React Native",
    tech: [{ tech: "React Native" }, { tech: "Firebase" }],
    image: "/whodunit-thumb.png",
    link: "www.apple.se",
    tag: "work",
  },
  {
    id: 10,
    name: "Allt för klubben",
    description: "An app built in React Native",
    tech: [
      { tech: "React" },
      { tech: "Firebase" },
      { tech: "Google Analytics" },
      { tech: "Styled components" },
      { tech: "Framer motion" },
    ],
    image: "/afk.png",
    link: "www.apple.se",
    tag: "work",
  },
  {
    id: 10,
    name: "Barbie Burgers - booking app",
    description: "An app built in React Native",
    tech: [{ tech: "React" }, { tech: "MongoDB" }, { tech: "Node" }],
    image: "/afk.png",
    link: "www.apple.se",
    tag: "school",
  },
];
