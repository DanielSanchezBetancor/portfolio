import IconDev from "@public/icon/icon-dev.svg";
import IconSoftSkills from "@public/icon/icon-soft-skills.svg";
import { SKILLS, SOFT_SKILLS } from "@src/constants";
import React from "react";
import SkillsCard from "./components/SkillsCard";
import useSkillsCards from "./hooks/useSkillsCards";
import styles from "./styles.module.scss";

const { skills__background__cards } = styles;

const SkillsCards: React.FC = () => {
  const {
    developmentLabel,
    developmentDescriptionLabel,
    softSkillsLabel,
    softSkillsDescriptionLabel,
    iconDevAlt,
    iconSoftSkillAlt,
  } = useSkillsCards();

  return (
    <div className={`${skills__background__cards} column_1`} data-testid={"skills-cards"}>
      <SkillsCard
        icon={IconDev}
        iconAlt={iconDevAlt}
        skills={SKILLS}
        title={developmentLabel}
        description={developmentDescriptionLabel}
      />
      <SkillsCard
        icon={IconSoftSkills}
        iconAlt={iconSoftSkillAlt}
        skills={SOFT_SKILLS}
        title={softSkillsLabel}
        description={softSkillsDescriptionLabel}
      />
    </div>
  );
};

export default SkillsCards;
