import React from "react";
import IllustrationImage from "./components/IllustrationImage";
import SkillsCards from "./components/SkillsCards";
import { ISkillsLayoutProps } from "./interfaces";
import styles from "./styles.module.scss";

const { skills, skills__beautifier } = styles;

const SkillsLayout: React.FC<ISkillsLayoutProps> = ({ skillsRef }) => {
  return (
    <section
      id="skills"
      className={skills}
      ref={skillsRef}
      data-testid="skills"
    >
      <IllustrationImage />
      <div
        className={`gradient-vertical ${skills__beautifier}`}
        role="img"
        aria-hidden="true"
        data-testid="skills-beautifier"
      ></div>
      <SkillsCards />
    </section>
  );
};

export default React.memo(SkillsLayout);
