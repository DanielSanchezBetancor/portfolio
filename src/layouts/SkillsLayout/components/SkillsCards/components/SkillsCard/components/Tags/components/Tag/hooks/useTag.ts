import { useTranslation } from "react-i18next";
import { ITagHookProps } from "../interfaces";

const useTag = ({ alt, skill }: ITagHookProps) => {
  const { t } = useTranslation();

  const translatedAlt = t(alt ?? "");
  const translatedSkill = t(skill);

  return { translatedAlt, translatedSkill };
};

export default useTag;
