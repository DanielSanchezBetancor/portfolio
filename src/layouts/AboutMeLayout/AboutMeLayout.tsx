import React from "react";
import AboutMeInformation from "./components/AboutMeInformation";
import AboutMeTable from "./components/AboutMeTable";
import styles from "./styles.module.scss";
import { IAboutMeLayoutProps } from "./interfaces";

const { aboutMe } = styles;

const AboutMeLayout: React.FC<IAboutMeLayoutProps> = ({ aboutMeRef }) => {
  return (
    <section
      id="about-me"
      ref={aboutMeRef}
      className={aboutMe}
      data-testid={"about-me"}
    >
      <AboutMeInformation />
      <AboutMeTable />
    </section>
  );
};

export default AboutMeLayout;
