import CodingFlavourLogo from "@public/coding-flavour-logo.svg";
import IconClose from "@public/icon-close.svg";
import IconMenu from "@public/icon-menu.svg";
import { MENU_OPTIONS } from "@src/constants";
import Image from "next/image";
import React from "react";
import LanguageSelector from "./components/LanguageSelector";
import useHeaderLayout from "./hooks/useHeaderLayout";
import { IHeaderLayoutProps } from "./interfaces";
import styles from "./styles.module.scss";

const {
  headerLayout,
  headerWrapper,
  img_mobile,
  hidden,
  headerLayoutMenu,
  nav,
  nav__list,
  panel,
  menuOpen,
} = styles;

const HeaderLayout: React.FC<IHeaderLayoutProps> = ({
  activeId,
  open,
  setOpen,
}) => {
  const { codingFlavourLogoAlt, openMenuAlt, closeMenuAlt, t } =
    useHeaderLayout();

  // This can be multiple components but I'm lazy :)
  return (
    <header
      className={`${headerLayout} ${open ? menuOpen : ""}`}
      data-testid={"header"}
    >
      <div className={`column_1 ${headerWrapper}`}>
        <div className={panel}>
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
        </div>
        <nav className={nav}>
          <ul data-testid={"header-menu-list"} className={nav__list}>
            {Object.values(MENU_OPTIONS).map((menuOption) => (
              <li
                className={`${
                  activeId === menuOption.id ? "text__bold__big" : "text__big"
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
        </nav>
        <LanguageSelector open={open} />
      </div>
    </header>
  );
};

export default HeaderLayout;
