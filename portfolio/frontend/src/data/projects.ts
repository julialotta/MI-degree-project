import { IProjects } from "../models/IProjects";
// 1 work
// 2 School
// 3 other
export const projects: IProjects[] = [
  {
    id: 0,
    name: "Whodunit Geogames",
    description: "An app built in React Native",
    tech: ["React Native", "Firebase", "Google Maps API"],
    image: "/whodunit-thumb.png",
    link: "www.apple.com",
    tag: "Work",
  },
  {
    id: 1,
    name: "Allt för klubben",
    description:
      "On behalf of advertising agency Passion Lab I have created a quiz application for Obos Damallsvenskan, where football fans can compete against each other, for their favorite team.",
    tech: [
      "React",
      "TypeScript",
      "NodeJS",
      "Axios",
      "Express",
      "Firebase",
      "Google Analytics",
      "Styled components",
      "Framer motion",
    ],
    image: "/afk.png",
    link: "afk.tingloef.se",
    github: "https://github.com/julialotta/Obos-Damallsvenskan-quiz-app",

    tag: "Work",
  },
  {
    id: 2,
    name: "Jullan Debugger",
    description:
      "For my degree project I created the game Jullan Debugger. Jullan has to fight bugs and thrives when she gets coffee and chocolate. This game is created with Kaboom JS. ",
    tech: ["React", "MongoDB", "Node JS", "Kaboom JS"],
    image: "/game.png",
    link: "debugger.tingloef.se",
    github: "",
    tag: "School",
  },

  {
    id: 3,
    name: "BRF Kakburken",
    description:
      "As a board member om my BRF I created a website for all the residents where the board easily can share new and important information",
    tech: ["React", "Styled Components", "Framer motion"],
    image: "/brf.png",
    link: "www.brfkakburken.se",
    github: "https://github.com/julialotta/BRF-Kakburken",
    tag: "Other",
  },
];

// TODO: gör ett api som visar all tech som finns i projecten
export const tech: string[] = [
  "React",
  "TypeScript",
  "NodeJS",
  "Axios",
  "Express",
  "Firebase",
  "Google Analytics",
  "Styled components",
  "Framer motion",
];
