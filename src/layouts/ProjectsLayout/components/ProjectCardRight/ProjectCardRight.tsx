import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { IProject } from "../../interfaces";
import ProjectCardDetails from "../ProjectCardDetails";
import styles from "./styles.module.scss";

const { project_card, separator, empty, slider } = styles;

const ProjectCardRight: React.FC<IProject> = ({
  date,
  description,
  linkGithub,
  linkWebsite,
  techStack,
  title,
  backgroundImage,
  backgroundImageAlt,
  index,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={empty}
        data-testid={"project-card-right-empty-grid"}
      ></div>
      <div
        className={separator}
        role="img"
        data-testid={"project-card-right-separator"}
      >
        <span className="text__bold">{date}</span>
      </div>
      <div
        className={`${project_card} animate-grid-${index}`}
        data-testid={"project-card-right"}
      >
        <Image
          src={backgroundImage}
          alt={t(backgroundImageAlt)}
          data-testid={"project-card-right-image"}
        />
        <ProjectCardDetails
          title={title}
          description={t(description)}
          linkGithub={linkGithub}
          linkWebsite={linkWebsite}
        />
        <div className={slider} data-testid={"project-card-right-slider"}>
          {techStack.map((tech) => (
            <Image src={tech.icon} alt={t(tech.iconAlt)} key={tech.iconAlt} width={24} height={24}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCardRight;
