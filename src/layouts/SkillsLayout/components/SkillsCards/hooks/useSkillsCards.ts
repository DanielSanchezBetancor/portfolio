import { NAMESPACES } from "@src/i18n/namespaces";
import { useTranslation } from "react-i18next";

const useSkillsCards = () => {
  const { t } = useTranslation();

  const developmentLabel = t(NAMESPACES.SKILLS.DEVELOPMENT);
  const developmentDescriptionLabel = t(
    NAMESPACES.SKILLS.DEVELOPMENT_DESCRIPTION
  );
  const softSkillsLabel = t(NAMESPACES.SKILLS.SOFT_SKILLS);
  const softSkillsDescriptionLabel = t(
    NAMESPACES.SKILLS.SOFT_SKILLS_DESCRIPTION
  );
  const iconDevAlt = t(NAMESPACES.SKILLS.ICON_DEV_ALT);
  const iconSoftSkillAlt = t(NAMESPACES.SKILLS.ICON_SOFT_SKILLS_ALT);

  return {
    developmentLabel,
    developmentDescriptionLabel,
    softSkillsLabel,
    softSkillsDescriptionLabel,
    iconDevAlt,
    iconSoftSkillAlt,
  };
};

export default useSkillsCards;
