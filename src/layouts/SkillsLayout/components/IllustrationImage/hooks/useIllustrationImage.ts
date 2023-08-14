import i18n from "@src/i18n/i18n";
import { NAMESPACES } from "@src/i18n/namespaces";

const useIllustrationImage = () => {
  const { t } = i18n;

  const illustrationLabel = t(NAMESPACES.SKILLS.ILLUSTRATION_ALT);

  return { illustrationLabel };
};

export default useIllustrationImage;
