import i18n from "@src/i18n/i18n";
import { NAMESPACES } from "@src/i18n/namespaces";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useHeaderLayout = () => {
  const { t } = useTranslation();
  const { changeLanguage, language } = i18n;
  const [open, setOpen] = useState(false);

  const changeLang = (newLang: any) => {
    changeLanguage(newLang);
  };

  const codingFlavourLogoAlt = t(NAMESPACES.HEADER.CODING_FLAVOUR_LOGO_ALT);
  const openMenuAlt = t(NAMESPACES.HEADER.OPEN_MENU_ALT);
  const closeMenuAlt = t(NAMESPACES.HEADER.CLOSE_MENU_ALT);

  return {
    codingFlavourLogoAlt,
    openMenuAlt,
    closeMenuAlt,
    open,
    setOpen,
    language,
    changeLang,
    t,
  };
};

export default useHeaderLayout;
