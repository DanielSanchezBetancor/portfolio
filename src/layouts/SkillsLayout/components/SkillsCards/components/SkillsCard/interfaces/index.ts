import { StaticImageData } from "next/image";
import { ISkillItem } from "../../../interfaces";

interface ISkillsCardProps {
  icon: StaticImageData;
  iconAlt: string;
  skills: ISkillItem[];
  title: string;
  description: string;
}

export type { ISkillsCardProps };
