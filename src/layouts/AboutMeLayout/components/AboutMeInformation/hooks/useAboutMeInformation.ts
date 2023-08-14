import { NAMESPACES } from "@src/i18n/namespaces";
import { useTranslation } from "react-i18next";

const useAboutMeInformation = () => {
  const { t } = useTranslation();

  const iAmLabel = t(NAMESPACES.ABOUT_ME.I_AM);
  const fullstackLabel = t(NAMESPACES.ABOUT_ME.FULLSTACK);
  const frontSpecialistLabel = t(NAMESPACES.ABOUT_ME.FRONT_SPECIALIST);

  return { iAmLabel, fullstackLabel, frontSpecialistLabel };
};

export default useAboutMeInformation;
