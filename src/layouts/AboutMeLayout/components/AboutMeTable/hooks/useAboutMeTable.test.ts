import { NAMESPACES } from "@src/i18n/namespaces";
import { act, renderHook } from "@testing-library/react";
import useAboutMeTable from "./useAboutMeTable";

const setup = () => {
  const hookResult = renderHook(useAboutMeTable);

  return {
    hookResult,
  };
};

describe("Use About Me Table Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { active, setActive, profileLabel, experienceLabel } =
      utils.hookResult.result.current;

    expect(active).toBe(false);
    expect(setActive).toBeDefined();
    expect(profileLabel).toBe(NAMESPACES.ABOUT_ME.PROFILE);
    expect(experienceLabel).toBe(NAMESPACES.ABOUT_ME.EXPERIENCE);
  });
  it("should change value on set active", () => {
    const utils = setup();
    const { active: initialActive, setActive } =
      utils.hookResult.result.current;

    expect(initialActive).toBe(false);

    act(() => {
      setActive(!initialActive);
    });

    const { active } = utils.hookResult.result.current;

    expect(active).toBe(!initialActive);
  });
});
