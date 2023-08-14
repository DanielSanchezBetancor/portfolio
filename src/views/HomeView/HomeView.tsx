import React from "react";
import useHomeView from "./hooks/useHomeView";
import styles from "./styles.module.scss";
import HeaderLayout from "@src/layouts/HeaderLayout";
import AboutMeLayout from "@src/layouts/AboutMeLayout";
import SkillsLayout from "@src/layouts/SkillsLayout";
import ProjectsLayout from "@src/layouts/ProjectsLayout";
import FooterLayout from "@src/layouts/FooterLayout";

const { main } = styles;

const HomeView: React.FC = () => {
  const { activeId, aboutMeRef, skillsRef, projectsRef } = useHomeView();

  return (
    <>
      <HeaderLayout activeId={activeId} />
      <main className={main} data-testid={"main"}>
        <AboutMeLayout aboutMeRef={aboutMeRef} />
        <SkillsLayout skillsRef={skillsRef} />
        <ProjectsLayout projectsRef={projectsRef} />
      </main>
      <FooterLayout />
    </>
  );
};

export default HomeView;
