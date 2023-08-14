import { NAMESPACES } from "@src/i18n/namespaces";
import { useTranslation } from "react-i18next";

const useProjectsLayout = () => {
  const { t } = useTranslation();

  const projectsLabel = t(NAMESPACES.PROJECTS.TITLE);

  return { projectsLabel };
};

export default useProjectsLayout;
