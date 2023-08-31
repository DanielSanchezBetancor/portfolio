import IconGithub from "@public/icon/icon-github.svg";
import IconGoTo from "@public/icon/icon-goto.svg";
import Image from "next/image";
import React from "react";
import { IProjectCardDetailsProps } from "./interfaces";
import styles from "./styles.module.scss";
import useProjectCardDetails from "./hooks/useProjectCardDetails";
import Link from "next/link";

const { project_card__details, project_card__details__header } = styles;

const ProjectCardDetails: React.FC<IProjectCardDetailsProps> = ({
  title,
  description,
  linkGithub,
  linkWebsite,
}) => {
  const { visitGitHubAlt, visitProjectAlt } = useProjectCardDetails();

  return (
    <>
      <div
        className={project_card__details}
        data-testid={"project-card-details"}
      >
        <div
          className={project_card__details__header}
          data-testid={"project-card-details-header"}
        >
          <span className="text__bold">{title}</span>
          <div data-testid={"project-card-details-header-links"}>
            <Link href={linkGithub} target="_blank">
              <Image src={IconGithub} alt={visitGitHubAlt} />
            </Link>
            <Link href={linkWebsite} target="_blank">
              <Image src={IconGoTo} alt={visitProjectAlt} />
            </Link>
          </div>
        </div>
        <span
          className="text__small"
          data-testid={"project-card-details-description"}
        >
          {description}
        </span>
      </div>
    </>
  );
};

export default ProjectCardDetails;
