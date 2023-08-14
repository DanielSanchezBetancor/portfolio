import Image from "next/image";
import React from "react";
import Tags from "./components/Tags";
import { ISkillsCardProps } from "./interfaces";
import styles from "./styles.module.scss";

const { card, card__header, card__body } = styles;

const SkillsCard: React.FC<ISkillsCardProps> = ({
  icon,
  iconAlt,
  skills,
  title,
  description,
}) => {
  return (
    <article className={card} data-testid={"skills-card"}>
      <div className={card__header} data-testid={"skills-card-header"}>
        <Image src={icon} alt={iconAlt} data-testid={"skills-card-header-icon"} />
        <h2 className="header__extra-small" data-testid={"skills-card-header-title"} >{title}</h2>
      </div>
      <div className={card__body} data-testid={"skills-card-body"}>
        <span className="text__closer" data-testid={"skills-card-body-description"} >{description}</span>
        <Tags skills={skills} />
      </div>
    </article>
  );
};

export default SkillsCard;
