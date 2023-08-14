import { NAMESPACES } from "@src/i18n/namespaces";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useAboutMeTable = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  const profileLabel = t(NAMESPACES.ABOUT_ME.PROFILE);
  const experienceLabel = t(NAMESPACES.ABOUT_ME.EXPERIENCE);

  return { active, setActive, profileLabel, experienceLabel };
};

export default useAboutMeTable;
