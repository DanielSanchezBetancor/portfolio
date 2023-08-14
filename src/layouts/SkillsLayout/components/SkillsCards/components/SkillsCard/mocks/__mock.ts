import { NAMESPACES } from "@src/i18n/namespaces";
import { ISkillsCardProps } from "../interfaces";
import IconDev from "@public/icon-dev.svg";
import { SKILLS } from "@src/constants";

const EMPTY_SKILLS_MOCK = {
  description: NAMESPACES.SKILLS.DEVELOPMENT_DESCRIPTION,
  icon: IconDev,
  iconAlt: NAMESPACES.SKILLS.ICON_DEV_ALT,
  skills: [],
  title: NAMESPACES.SKILLS.DEVELOPMENT,
}
const CORRECT_MOCK: ISkillsCardProps = {
  ...EMPTY_SKILLS_MOCK,
  skills: SKILLS,
};

export { EMPTY_SKILLS_MOCK, CORRECT_MOCK };
