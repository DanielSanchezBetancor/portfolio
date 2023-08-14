import { NAMESPACES } from "@src/i18n/namespaces";
import { renderHook } from "@testing-library/react";
import useAboutMeTableBody from "./useAboutMeTableBody";

const setup = () => {
  const hookResult = renderHook(useAboutMeTableBody);

  return {
    hookResult,
  };
};

describe("Use About Me Table Body Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { aboutMeLabel, thatsMeAlt, visitLinkedinAlt, visitGithubAlt, t } =
      utils.hookResult.result.current;

    expect(aboutMeLabel).toBe(NAMESPACES.ABOUT_ME.ABOUT_ME);
    expect(thatsMeAlt).toBe(NAMESPACES.ABOUT_ME.THATS_ME);
    expect(visitLinkedinAlt).toBe(NAMESPACES.FOOTER.VISIT_LINKEDIN_ALT);
    expect(visitGithubAlt).toBe(NAMESPACES.FOOTER.VISIT_GITHUB_ALT);
    expect(t).toBeDefined();
  });
});
