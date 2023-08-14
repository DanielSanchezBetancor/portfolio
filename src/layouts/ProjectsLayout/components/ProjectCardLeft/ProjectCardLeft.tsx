import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { IProject } from "../../interfaces";
import ProjectCardDetails from "../ProjectCardDetails";
import styles from "./styles.module.scss";

const { project_card, separator, date, empty, slider } = styles;

const ProjectCardLeft: React.FC<IProject> = ({
  date,
  description,
  linkGithub,
  linkWebsite,
  techStack,
  title,
  backgroundImage,
  backgroundImageAlt,
  index
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`${project_card} animate-grid-${index}`}
        data-testid={"project-card-left"}
      >
        <div className={slider} data-testid={"project-card-left-slider"}>
          {techStack.map((tech) => (
            <Image src={tech.icon} alt={t(tech.iconAlt)} key={tech.iconAlt} />
          ))}
        </div>
        <ProjectCardDetails
          title={title}
          description={t(description)}
          linkGithub={linkGithub}
          linkWebsite={linkWebsite}
        />

        <Image
          src={backgroundImage}
          alt={t(backgroundImageAlt)}
          width={165}
          data-testid={"project-card-left-image"}
        />
      </div>
      <div
        className={separator}
        role="img"
        data-testid={"project-card-left-separator"}
      >
        <span className="text__bold">{date}</span>
      </div>
      <div className={empty} data-testid={"project-card-left-empty-grid"}></div>
    </>
  );
};

export default ProjectCardLeft;
