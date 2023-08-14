import { CORRECT_MOCK } from "../../../../../mocks/__mock";
import useTag from "./useTag";
import { renderHook } from "@testing-library/react";

const setup = () => {
  const hookResult = renderHook(useTag, {
    initialProps: {
      alt: CORRECT_MOCK.skills[0].alt,
      skill: CORRECT_MOCK.skills[0].skill,
    },
  });

  return {
    hookResult,
  };
};

describe("Use Tag Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { translatedAlt, translatedSkill } = utils.hookResult.result.current;

    expect(translatedAlt).toBe(CORRECT_MOCK.skills[0].alt);
    expect(translatedSkill).toBe(CORRECT_MOCK.skills[0].skill);
  });
});
