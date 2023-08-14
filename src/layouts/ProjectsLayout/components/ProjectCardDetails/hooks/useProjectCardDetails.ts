import { NAMESPACES } from "@src/i18n/namespaces";
import { useTranslation } from "react-i18next";

const useProjectCardDetails = () => {
  const { t } = useTranslation();

  const visitGitHubAlt = t(NAMESPACES.PROJECTS.VISIT_GITHUB_ALT);
  const visitProjectAlt = t(NAMESPACES.PROJECTS.VISIT_PROJECT_ALT);

  return { visitGitHubAlt, visitProjectAlt };
};

export default useProjectCardDetails;
