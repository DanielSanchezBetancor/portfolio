import { NAMESPACES } from "@src/i18n/namespaces";
import useIllustrationImage from "./useIllustrationImage";
import { renderHook } from "@testing-library/react";

const setup = () => {
  const hookResult = renderHook(useIllustrationImage);

  return {
    hookResult,
  };
};

describe("Use Illustration Image Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { illustrationLabel } = utils.hookResult.result.current;

    expect(illustrationLabel).toBe(NAMESPACES.SKILLS.ILLUSTRATION_ALT);
  });
});
