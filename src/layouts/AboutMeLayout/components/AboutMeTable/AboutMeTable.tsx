import React from "react";
import AboutMeTableBody from "./components/AboutMeTableBody";
import useAboutMeTable from "./hooks/useAboutMeTable";
import styles from "./styles.module.scss";

const { table, table__header, table__header__option, activeOption } = styles;

const AboutMeTable: React.FC = () => {
  const { active, setActive, profileLabel, experienceLabel } =
    useAboutMeTable();

  return (
    <div className={table} data-testid={"about-me-table"}>
      <div className={table__header} data-testid={"about-me-table-header"}>
        <span
          className={`${table__header__option}  ${
            active ? `${activeOption} text__higher` : " text__white"
          }`}
          onClick={() => setActive(false)}
          data-testid={"about-me-table-header-profile"}
        >
          {profileLabel}
        </span>
        <span
          className={`${table__header__option} ${
            !active ? `${activeOption} text__higher` : " text__white"
          }`}
          onClick={() => setActive(true)}
          data-testid={"about-me-table-header-experience"}
        >
          {experienceLabel}
        </span>
      </div>
      <AboutMeTableBody active={active} />
    </div>
  );
};

export default AboutMeTable;
