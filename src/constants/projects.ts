import IconHTML from "@public/icon-html.svg";
import IconJavascript from "@public/icon-javascript.svg";
import IconNextJS from "@public/icon-nextjs.svg";
import ImgPlaceholder from "@public/img-placeholder.png";
import { IProject } from "@src/layouts/ProjectsLayout/interfaces";

const PROJECTS: IProject[] = [
  {
    title: "Coding Flavour",
    date: "09/2023 - ?",
    description: "project.codingFlavour",
    linkGithub: "https://github.com/DanielSanchezBetancor",
    linkWebsite: "https://coding-flavour.com",
    techStack: [
      {
        icon: IconJavascript,
        iconAlt: "project.iconJavascriptAlt",
      },
      {
        icon: IconNextJS,
        iconAlt: "project.iconNextJsAlt",
      },
      {
        icon: IconHTML,
        iconAlt: "project.iconHtmlAlt",
      },
    ],
    backgroundImage: ImgPlaceholder,
    backgroundImageAlt: "project.me",
    index: 0
  },
  {
    title: "Portfolio",
    date: "08/2023 - 08/2023",
    description: "project.portfolio",
    linkGithub: "https://github.com/DanielSanchezBetancor/portfolio",
    linkWebsite: "https://dsanchezpro.com",
    techStack: [
      {
        icon: IconJavascript,
        iconAlt: "project.iconJavascriptAlt",
      },
      {
        icon: IconNextJS,
        iconAlt: "project.iconNextJsAlt",
      },
      {
        icon: IconHTML,
        iconAlt: "project.iconHtmlAlt",
      },
    ],
    backgroundImage: ImgPlaceholder,
    backgroundImageAlt: "project.me",
    index: 0
  },
];

export { PROJECTS };
