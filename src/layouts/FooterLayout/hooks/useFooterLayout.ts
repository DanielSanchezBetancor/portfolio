import { useTranslation } from "react-i18next";
import { NAMESPACES } from "@src/i18n/namespaces";

const useFooterLayout = () => {
  const { t } = useTranslation();

  const visitLinkedinAlt = t(NAMESPACES.FOOTER.VISIT_LINKEDIN_ALT);
  const visitGithubAlt = t(NAMESPACES.FOOTER.VISIT_GITHUB_ALT);

  return { visitLinkedinAlt, visitGithubAlt };
};

export default useFooterLayout;
