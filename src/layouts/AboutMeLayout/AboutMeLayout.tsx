import React from "react";
import AboutMeInformation from "./components/AboutMeInformation";
import AboutMeTable from "./components/AboutMeTable";
import { IAboutMeLayoutProps } from "./interfaces";
import styles from "./styles.module.scss";

const { aboutMe } = styles;

const AboutMeLayout: React.FC<IAboutMeLayoutProps> = ({ aboutMeRef }) => {
  return (
    <section
      id="about-me"
      ref={aboutMeRef}
      className={`${aboutMe} column_1`}
      data-testid={"about-me"}
    >
      <AboutMeInformation />
      <AboutMeTable />
    </section>
  );
};

export default AboutMeLayout;
