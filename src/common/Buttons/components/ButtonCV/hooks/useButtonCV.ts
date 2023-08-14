import { NAMESPACES } from "@src/i18n/namespaces";
import React from "react";
import { useTranslation } from "react-i18next";

const useButtonCV = () => {
  const { t } = useTranslation();

  const downloadCVLabel = t(NAMESPACES.BUTTONS.DOWNLOAD_CV);

  return { downloadCVLabel };
};

export default useButtonCV;
