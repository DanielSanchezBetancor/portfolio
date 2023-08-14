import React from "react";
import Tag from "./components/Tag";
import { ITagsProps } from "./interfaces";
import styles from "./styles.module.scss";

const { tags } = styles;

const Tags: React.FC<ITagsProps> = ({ skills }) => {
  return (
    <div className={tags} data-testid="tags">
      {skills.map((skill) => (
        <Tag {...skill} key={skill.skill} />
      ))}
    </div>
  );
};

export default Tags;
