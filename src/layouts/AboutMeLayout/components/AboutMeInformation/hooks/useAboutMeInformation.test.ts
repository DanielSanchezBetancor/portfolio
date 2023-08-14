import { NAMESPACES } from "@src/i18n/namespaces";
import { renderHook } from "@testing-library/react";
import useAboutMeInformation from "./useAboutMeInformation";

const setup = () => {
  const hookResult = renderHook(useAboutMeInformation);

  return {
    hookResult,
  };
};

describe("Use About Me Information Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { iAmLabel, fullstackLabel, frontSpecialistLabel } =
      utils.hookResult.result.current;

    expect(iAmLabel).toBe(NAMESPACES.ABOUT_ME.I_AM);
    expect(fullstackLabel).toBe(NAMESPACES.ABOUT_ME.FULLSTACK);
    expect(frontSpecialistLabel).toBe(NAMESPACES.ABOUT_ME.FRONT_SPECIALIST);
  });
});
