import { NAMESPACES } from "@src/i18n/namespaces";
import { useTranslation } from "react-i18next";

const useAboutMeTableBody = () => {
  const { t } = useTranslation();

  const aboutMeLabel = t(NAMESPACES.ABOUT_ME.ABOUT_ME);
  const thatsMeAlt = t(NAMESPACES.ABOUT_ME.THATS_ME);
  const visitLinkedinAlt = t(NAMESPACES.FOOTER.VISIT_LINKEDIN_ALT);
  const visitGithubAlt = t(NAMESPACES.FOOTER.VISIT_GITHUB_ALT);

  return { aboutMeLabel, thatsMeAlt, visitLinkedinAlt, visitGithubAlt, t };
};

export default useAboutMeTableBody;
