import IconGithubWhite from "@public/icon-github-white.svg";
import IconGithub from "@public/icon-github.svg";
import IconLinkedinWhite from "@public/icon-linkedin-white.svg";
import IconLinkedin from "@public/icon-linkedin.svg";
import Me from "@public/me.png";
import Buttons from "@src/common/Buttons";
import ButtonCV from "@src/common/Buttons/components/ButtonCV";
import ButtonIcon from "@src/common/Buttons/components/ButtonIcon";
import { EXPERIENCE } from "@src/constants/experience";
import { NAMESPACES } from "@src/i18n/namespaces";
import Image from "next/image";
import React from "react";
import useAboutMeTableBody from "./hooks/useAboutMeTableBody";
import { IAboutMeTableBodyProps } from "./interfaces";
import styles from "./styles.module.scss";

const {
  panelImage,
  panelLeft,
  panelLeft__actions,
  panelLeft__information,
  panelsWrapper,
  rightActivePanel,
  panelRight,
  experiences,
} = styles;

const AboutMeTableBody: React.FC<IAboutMeTableBodyProps> = ({ active }) => {
  const { aboutMeLabel, thatsMeAlt, visitLinkedinAlt, visitGithubAlt, t } =
    useAboutMeTableBody();

  return (
    <div
      className={`${panelsWrapper} ${active ? rightActivePanel : ""}`}
      data-testid={"about-me-table-body"}
    >
      <div className={panelLeft} data-testid={"about-me-table-body-left"}>
        <Image
          src={Me}
          alt={thatsMeAlt}
          className={`gradient-horizontal ${panelImage}`}
          data-testid={"about-me-table-body-left-image"}
        />
        <div
          className={panelLeft__information}
          data-testid={"about-me-table-body-left-information"}
        >
          <span
            className="text__higher"
            data-testid={"about-me-table-body-left-information-about-me"}
          >
            {aboutMeLabel}
          </span>
          <div
            className={panelLeft__actions}
            data-testid={"about-me-table-body-left-information-actions"}
          >
            <Buttons goTo="CV.pdf" download>
              <ButtonCV />
            </Buttons>
            <Buttons color="blue" goTo={NAMESPACES.LINKS.LINKEDIN}>
              <ButtonIcon
                alt={visitLinkedinAlt}
                icon={IconLinkedin}
                iconWhite={IconLinkedinWhite}
              />
            </Buttons>
            <Buttons color="purple" goTo={NAMESPACES.LINKS.GITHUB}>
              <ButtonIcon
                alt={visitGithubAlt}
                icon={IconGithub}
                iconWhite={IconGithubWhite}
              />
            </Buttons>
          </div>
        </div>
      </div>
      <div className={panelRight} data-testid={"about-me-table-body-right"}>
        <div data-testid={"about-me-table-body-right-wrapper"}>
          {EXPERIENCE.map((experience) => (
            <div
              key={experience.title}
              className={experiences}
              data-testid={`about-me-table-body-right-${experience.title}`}
            >
              <span
                className="text__bold"
                data-testid={`table-${experience.title}`}
              >
                {t(experience.title)}
              </span>
              <span
                className="text"
                data-testid={`table-${experience.title}-place`}
              >
                {experience.place} {experience.date}
              </span>
              {experience.experience ? (
                <ul data-testid={"table-experiences"}>
                  {experience.experience.map((jobExperience) => (
                    <li className="text" key={jobExperience}>
                      {t(jobExperience)}
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeTableBody;
