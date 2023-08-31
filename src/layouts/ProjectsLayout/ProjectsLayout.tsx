import React from "react";
import { IProjectsLayoutProps } from "./interfaces";
import { PROJECTS } from "@src/constants";
import ProjectCardLeft from "./components/ProjectCardLeft";
import ProjectCardRight from "./components/ProjectCardRight";
import styles from "./styles.module.scss";
import useProjectsLayout from "./hooks/useProjectsLayout";

const { projects, grid } = styles;

const ProjectsLayout: React.FC<IProjectsLayoutProps> = ({ projectsRef }) => {
  const { projectsLabel } = useProjectsLayout();

  return (
    <section
      id="projects"
      className={projects}
      ref={projectsRef}
      data-testid="projects"
    >
      <h2 className={"header__extra-small"} data-testid="projects-title">
        {projectsLabel}
      </h2>
      <div className={`${grid} column_1`} data-testid="projects-grid">
        {PROJECTS.map((project, index) =>
          index % 2 === 0 ? (
            <ProjectCardRight {...project} key={project.title} index={index} />
          ) : (
            <ProjectCardLeft {...project} key={project.title} index={index} />
          )
        )}
      </div>
    </section>
  );
};

export default React.memo(ProjectsLayout);
