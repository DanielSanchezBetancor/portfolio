import React from "react";
import useAboutMeInformation from "./hooks/useAboutMeInformation";
import styles from "./styles.module.scss";

const { wrapper } = styles;

const AboutMeInformation: React.FC = () => {
  const { iAmLabel, fullstackLabel, frontSpecialistLabel } =
    useAboutMeInformation();

  return (
    <div className={wrapper} data-testid={"wrapper"}>
      <span className="header__medium" data-testid={"information-text-1"}>
        {iAmLabel}
      </span>
      <span className="header__big" data-testid={"information-text-2"}>
        Daniel
      </span>
      <span className="header__big" data-testid={"information-text-3"}>
        Sánchez
      </span>
      <span className="header__small" data-testid={"information-text-4"}>
        {fullstackLabel}
      </span>
      <span
        className="header__small text-gradient"
        data-testid={"information-text-5"}
      >
        {frontSpecialistLabel}
      </span>
    </div>
  );
};

export default AboutMeInformation;
