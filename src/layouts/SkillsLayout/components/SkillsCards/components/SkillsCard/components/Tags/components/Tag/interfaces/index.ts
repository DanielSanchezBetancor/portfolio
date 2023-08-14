import { ISkillItem } from "@src/layouts/SkillsLayout/components/SkillsCards/interfaces";

interface ITagHookProps extends Omit<ISkillItem, "icon"> {}

export type { ITagHookProps };
