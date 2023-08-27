import { ISkillItem } from "@src/layouts/SkillsLayout/components/SkillsCards/interfaces";
import Image from "next/image";
import React from "react";
import useTag from "./hooks/useTag";
import styles from "./styles.module.scss";

const { tag } = styles;

const Tag: React.FC<ISkillItem> = ({ icon, skill, alt }) => {
  const { translatedAlt, translatedSkill } = useTag({ skill, alt });

  return (
    <div className={tag} data-testid="tag">
      <Image src={icon} alt={translatedAlt} data-testid="tag-icon" width={24} height={24}/>
      <span className="text__semibold" data-testid="tag-skill">
        {translatedSkill}
      </span>
    </div>
  );
};

export default Tag;
