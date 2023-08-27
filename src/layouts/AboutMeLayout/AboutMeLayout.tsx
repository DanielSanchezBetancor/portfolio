import React from "react";
import AboutMeInformation from "./components/AboutMeInformation";
import AboutMeTable from "./components/AboutMeTable";
import { IAboutMeLayoutProps } from "./interfaces";
import styles from "./styles.module.scss";

const { aboutMe } = styles;

const AboutMeLayout: React.FC<IAboutMeLayoutProps> = ({ aboutMeRef }) => {
  return (
    <section id="about-me" ref={aboutMeRef} data-testid={"about-me"}>
      <div className={`${aboutMe} column_1`}>
        <AboutMeInformation />
        <AboutMeTable />
      </div>
    </section>
  );
};

export default AboutMeLayout;
