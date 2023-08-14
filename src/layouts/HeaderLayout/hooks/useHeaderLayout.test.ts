import useHeaderLayout from "./useHeaderLayout";
import { CORRECT_HOOK_MOCK, CORRECT_MOCK } from "../mocks/__mock";
import { NAMESPACES } from "@src/i18n/namespaces";
import { act, renderHook } from "@testing-library/react";

const setup = () => {
  const hookResult = renderHook(useHeaderLayout);

  return {
    hookResult,
  };
};

describe("Use Header Layout Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const {
      codingFlavourLogoAlt,
      openMenuAlt,
      closeMenuAlt,
      open,
      setOpen,
      language,
      changeLang,
      t,
    } = utils.hookResult.result.current;

    expect(codingFlavourLogoAlt).toBe(
      NAMESPACES.HEADER.CODING_FLAVOUR_LOGO_ALT
    );
    expect(openMenuAlt).toBe(NAMESPACES.HEADER.OPEN_MENU_ALT);
    expect(closeMenuAlt).toBe(NAMESPACES.HEADER.CLOSE_MENU_ALT);
    expect(open).toBe(false);
    expect(setOpen).toBeDefined();
    expect(language).toBe("cimode");
    expect(changeLang).toBeDefined();
    expect(t).toBeDefined();
  });
  it("should change value of open", () => {
    const utils = setup();
    const { open: prevOpen, setOpen } = utils.hookResult.result.current;

    expect(prevOpen).toBe(false);

    act(() => {
      setOpen(true);
    });

    utils.hookResult.rerender(true);

    const { open } = utils.hookResult.result.current;

    expect(open).toBe(!prevOpen);
  });
});
