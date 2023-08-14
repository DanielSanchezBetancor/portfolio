import { NAMESPACES } from "@src/i18n/namespaces";
import { IHeaderLayoutProps, IUseHeaderLayout } from "../interfaces";
import i18n from "@src/i18n/i18n";


const CORRECT_MOCK: IHeaderLayoutProps = {
    activeId: 0,
}

const CORRECT_HOOK_MOCK: IUseHeaderLayout = {
  codingFlavourLogoAlt: NAMESPACES.HEADER.CODING_FLAVOUR_LOGO_ALT,
  openMenuAlt: NAMESPACES.HEADER.OPEN_MENU_ALT,
  closeMenuAlt: NAMESPACES.HEADER.CLOSE_MENU_ALT,
  open: false,
  setOpen: jest.fn(),
  language: "en",
  changeLang: jest.fn(),
  t: i18n.t,
};

export { CORRECT_MOCK, CORRECT_HOOK_MOCK };
