import { NAMESPACES } from "@src/i18n/namespaces";
import useSkillsCards from "./useSkillsCards";
import { renderHook } from "@testing-library/react";

const setup = () => {
  const hookResult = renderHook(useSkillsCards);

  return {
    hookResult,
  };
};

describe("Use Skills Cards Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const {
      developmentLabel,
      developmentDescriptionLabel,
      softSkillsLabel,
      softSkillsDescriptionLabel,
      iconDevAlt,
      iconSoftSkillAlt,
    } = utils.hookResult.result.current;

    expect(developmentLabel).toBe(NAMESPACES.SKILLS.DEVELOPMENT);
    expect(developmentDescriptionLabel).toBe(
      NAMESPACES.SKILLS.DEVELOPMENT_DESCRIPTION
    );
    expect(softSkillsLabel).toBe(NAMESPACES.SKILLS.SOFT_SKILLS);
    expect(softSkillsDescriptionLabel).toBe(
      NAMESPACES.SKILLS.SOFT_SKILLS_DESCRIPTION
    );
    expect(iconDevAlt).toBe(NAMESPACES.SKILLS.ICON_DEV_ALT);
    expect(iconSoftSkillAlt).toBe(NAMESPACES.SKILLS.ICON_SOFT_SKILLS_ALT);
  });
});
