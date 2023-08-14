import CodingFlavourLogo from "@public/coding-flavour-logo.svg";
import IconClose from "@public/icon-close.svg";
import IconMenu from "@public/icon-menu.svg";
import { MENU_OPTIONS } from "@src/constants";
import Image from "next/image";
import React from "react";
import useHeaderLayout from "./hooks/useHeaderLayout";
import { IHeaderLayoutProps } from "./interfaces";
import styles from "./styles.module.scss";

const {
  headerLayout,
  languageSelector,
  translate,
  img_mobile,
  menuOptions,
  menuOptionsOpen,
  hidden,
  headerLayoutMenu,
} = styles;

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({ activeId }) => {
  const {
    codingFlavourLogoAlt,
    openMenuAlt,
    closeMenuAlt,
    open,
    setOpen,
    language,
    changeLang,
    t,
  } = useHeaderLayout();

  // This can be multiple components but I'm lazy :)
  return (
    <header className={headerLayout} data-testid={"header"}>
      <Image
        src={CodingFlavourLogo}
        alt={codingFlavourLogoAlt}
        data-testid={"header-logo"}
      />
      <div className={headerLayoutMenu} data-testid={"header-menu-actions"}>
        <Image
          src={IconMenu}
          alt={openMenuAlt}
          className={`${img_mobile} ${open ? hidden : ""}`}
          onClick={() => setOpen(!open)}
          data-testid={"header-menu-actions-open"}
        />
        <Image
          src={IconClose}
          alt={closeMenuAlt}
          className={`${img_mobile} ${!open ? hidden : ""}`}
          onClick={() => setOpen(!open)}
          data-testid={"header-menu-actions-close"}
        />
      </div>
      <div
        className={`${menuOptions} ${open ? menuOptionsOpen : ""}`}
        data-testid={"header-menu"}
      >
        <ul data-testid={"header-menu-list"}>
          {Object.values(MENU_OPTIONS).map((menuOption) => (
            <li
              className={`${
                activeId === menuOption.id ? "text__bold__big" : "text"
              }`}
              key={menuOption.anchor}
              onClick={() => setOpen(false)}
              data-testid={menuOption.anchor}
            >
              <a
                href={`#${menuOption.anchor}`}
                data-testid={`${menuOption.anchor}-link`}
              >
                {t(menuOption.label)}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`${
            language === "en" ? translate : ""
          } ${languageSelector}`}
          data-testid={"header-menu-language-selector"}
        >
          <span
            className={"text"}
            onClick={() => changeLang("es")}
            data-testid={"header-menu-language-selector-es"}
          >
            ES
          </span>
          <span className={"text"}>|</span>
          <span
            className={"text"}
            onClick={() => changeLang("en")}
            data-testid={"header-menu-language-selector-en"}
          >
            EN
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
