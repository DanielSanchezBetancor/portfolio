import IconGithubWhite from "@public/icon-github-white.svg";
import IconGithub from "@public/icon-github.svg";
import IconLinkedinWhite from "@public/icon-linkedin-white.svg";
import IconLinkedin from "@public/icon-linkedin.svg";
import Buttons from "@src/common/Buttons";
import ButtonCV from "@src/common/Buttons/components/ButtonCV";
import ButtonIcon from "@src/common/Buttons/components/ButtonIcon";
import React from "react";
import useFooterLayout from "./hooks/useFooterLayout";
import styles from "./styles.module.scss";
import { NAMESPACES } from "@src/i18n/namespaces";

const { footer, socials, footer__name } = styles;

const FooterLayout: React.FC = () => {
  const { visitLinkedinAlt, visitGithubAlt } = useFooterLayout();

  return (
    <footer className={`gradient-horizontal ${footer}`} data-testid={"footer"}>
      <div data-testid={"footer-name"}>
        <span className={`header__white ${footer__name}`}>Daniel Sanchez</span>
        <span className="text__semiwhite">| 2023</span>
      </div>
      <div className={socials} data-testid={"footer-socials"}>
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
    </footer>
  );
};
export default FooterLayout;
