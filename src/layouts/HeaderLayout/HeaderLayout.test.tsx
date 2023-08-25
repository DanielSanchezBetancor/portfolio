import { MENU_OPTIONS } from "@src/constants";
import { NAMESPACES } from "@src/i18n/namespaces";
import { render } from "@src/test/test-utils";
import HeaderLayout from "./HeaderLayout";
import { CORRECT_HOOK_MOCK, CORRECT_MOCK } from "./mocks/__mock";
import { act } from "react-dom/test-utils";
import { fireEvent } from "@testing-library/react";
import useHeaderLayout from "./hooks/useHeaderLayout";
import { IHeaderLayoutProps, IUseHeaderLayout } from "./interfaces";

jest.mock("./hooks/useHeaderLayout");
const useHeaderLayoutMock = useHeaderLayout as jest.MockedFunction<
  typeof useHeaderLayout
>;

const setup = (
  componentProps: IHeaderLayoutProps,
  hookReturn: IUseHeaderLayout
) => {
  const changeLangSpy = jest.fn();
  const setOpenSpy = jest.fn();

  useHeaderLayoutMock.mockImplementation(() => ({
    ...hookReturn,
    changeLang: changeLangSpy,
    setOpen: setOpenSpy,
  }));

  const context = render(<HeaderLayout {...componentProps} />);

  return {
    context,
    changeLangSpy,
    setOpenSpy,
  };
};

describe("Header Layout Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK, CORRECT_HOOK_MOCK);

    const header = utils.context.getByTestId("header");
    const headerLogo = utils.context.getByTestId("header-logo");
    const headerMenu = utils.context.getByTestId("header-menu");
    const headerMenuList = utils.context.getByTestId("header-menu-list");
    const headerMenuListItem = utils.context.getByTestId(
      MENU_OPTIONS.ABOUT_ME.anchor
    );
    const headerMenuListItemLink = utils.context.getByTestId(
      `${MENU_OPTIONS.ABOUT_ME.anchor}-link`
    );
    const headerMenuLanguageSelector = utils.context.getByTestId(
      "header-menu-language-selector"
    );
    const headerMenuLanguageSelectorES = utils.context.getByTestId(
      "header-menu-language-selector-es"
    );
    const headerMenuLanguageSelectorEN = utils.context.getByTestId(
      "header-menu-language-selector-en"
    );
    const headerMenuActions = utils.context.getByTestId("header-menu-actions");
    const headerMenuActionsOpen = utils.context.getByTestId(
      "header-menu-actions-open"
    );
    const headerMenuActionsClose = utils.context.getByTestId(
      "header-menu-actions-close"
    );

    expect(header).toBeInTheDocument();
    expect(headerLogo).toBeInTheDocument();
    expect(headerMenu).toBeInTheDocument();
    expect(headerMenuList).toBeInTheDocument();
    expect(headerMenuListItem).toBeInTheDocument();
    expect(headerMenuListItemLink).toBeInTheDocument();
    expect(headerMenuLanguageSelector).toBeInTheDocument();
    expect(headerMenuLanguageSelectorES).toBeInTheDocument();
    expect(headerMenuLanguageSelectorEN).toBeInTheDocument();
    expect(headerMenuActions).toBeInTheDocument();
    expect(headerMenuActionsOpen).toBeInTheDocument();
    expect(headerMenuActionsClose).toBeInTheDocument();
    expect(headerLogo.getAttribute("alt")).toBe(
      NAMESPACES.HEADER.CODING_FLAVOUR_LOGO_ALT
    );
    expect(headerMenuActionsOpen.getAttribute("alt")).toBe(
      NAMESPACES.HEADER.OPEN_MENU_ALT
    );
    expect(headerMenuActionsClose.getAttribute("alt")).toBe(
      NAMESPACES.HEADER.CLOSE_MENU_ALT
    );
    expect(headerMenuListItemLink.getAttribute("href")).toMatch(
      MENU_OPTIONS.ABOUT_ME.anchor
    );
  });
  it("should fire change language", () => {
    const { context, changeLangSpy } = setup(CORRECT_MOCK, CORRECT_HOOK_MOCK);

    const headerMenuLanguageSelectorES = context.getByTestId(
      "header-menu-language-selector-es"
    );

    const headerMenuLanguageSelectorEN = context.getByTestId(
      "header-menu-language-selector-en"
    );

    act(() => {
      fireEvent.click(headerMenuLanguageSelectorES);
    });

    expect(changeLangSpy).toBeCalledTimes(1);

    act(() => {
      fireEvent.click(headerMenuLanguageSelectorEN);
    });

    expect(changeLangSpy).toBeCalledTimes(2);
  });
  it("should fire open", () => {
    const { context, setOpenSpy } = setup(CORRECT_MOCK, CORRECT_HOOK_MOCK);

    const headerMenuActionsOpen = context.getByTestId(
      "header-menu-actions-open"
    );

    act(() => {
      fireEvent.click(headerMenuActionsOpen);
    });

    expect(setOpenSpy).toBeCalledTimes(1);
  });
  it("should fire close", () => {
    const { context, setOpenSpy } = setup(CORRECT_MOCK, CORRECT_HOOK_MOCK);

    const headerMenuActionsClose = context.getByTestId(
      "header-menu-actions-close"
    );

    act(() => {
      fireEvent.click(headerMenuActionsClose);
    });

    expect(setOpenSpy).toBeCalledTimes(1);
  });
  it("should have correct attributes on opened options", () => {
    const utils = setup(CORRECT_MOCK, CORRECT_HOOK_MOCK);

    const headerMenuActionsOpen = utils.context.getByTestId(
      "header-menu-actions-open"
    );
    const headerMenuActionsClose = utils.context.getByTestId(
      "header-menu-actions-close"
    );

    expect(headerMenuActionsOpen).toHaveClass("hidden");
    expect(headerMenuActionsClose).not.toHaveClass("hidden");
  });
  it("should have correct attributes on closed options", () => {
    const utils = setup(CORRECT_MOCK, CORRECT_HOOK_MOCK);

    const headerMenuActionsOpen = utils.context.getByTestId(
      "header-menu-actions-open"
    );
    const headerMenuActionsClose = utils.context.getByTestId(
      "header-menu-actions-close"
    );

    expect(headerMenuActionsOpen).not.toHaveClass("hidden");
    expect(headerMenuActionsClose).toHaveClass("hidden");
  });
  it("should be bold if active", () => {
    const utils = setup(
      { ...CORRECT_MOCK, activeId: MENU_OPTIONS.PROJECTS.id },
      CORRECT_HOOK_MOCK
    );

    const headerMenuListItemActive = utils.context.getByTestId(
      MENU_OPTIONS.PROJECTS.anchor
    );
    const headerMenuListItemNotActive = utils.context.getByTestId(
      MENU_OPTIONS.ABOUT_ME.anchor
    );

    expect(headerMenuListItemActive).toHaveClass("text__bold__big");
    expect(headerMenuListItemNotActive).toHaveClass("text");
  });
});
