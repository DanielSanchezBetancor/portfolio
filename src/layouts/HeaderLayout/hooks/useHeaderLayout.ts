import { NAMESPACES } from "@src/i18n/namespaces";
import { useTranslation } from "react-i18next";

const useHeaderLayout = () => {
  const { t } = useTranslation();

  const codingFlavourLogoAlt = t(NAMESPACES.HEADER.CODING_FLAVOUR_LOGO_ALT);
  const openMenuAlt = t(NAMESPACES.HEADER.OPEN_MENU_ALT);
  const closeMenuAlt = t(NAMESPACES.HEADER.CLOSE_MENU_ALT);

  return {
    codingFlavourLogoAlt,
    openMenuAlt,
    closeMenuAlt,
    t,
  };
};

export default useHeaderLayout;
