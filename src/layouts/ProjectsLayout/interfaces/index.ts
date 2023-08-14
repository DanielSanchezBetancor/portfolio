import { StaticImageData } from "next/image";
import { RefObject } from "react";

interface ITechStack {
  icon: StaticImageData;
  iconAlt: string;
}

interface IProject {
  title: string;
  date: string;
  description: string;
  linkGithub: string;
  linkWebsite: string;
  techStack: ITechStack[];
  backgroundImage: StaticImageData;
  backgroundImageAlt: string;
  index: number;
}
interface IProjectsLayoutProps {
  projectsRef: RefObject<HTMLElement>;
}

export type { IProject, IProjectsLayoutProps };
