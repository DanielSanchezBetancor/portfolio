import { NAMESPACES } from "@src/i18n/namespaces";
import { renderHook } from "@testing-library/react";
import useProjectCardDetails from "./useProjectCardDetails";

const setup = () => {
  const hookResult = renderHook(useProjectCardDetails);

  return {
    hookResult,
  };
};

describe("Use Project Card Details Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { visitGitHubAlt, visitProjectAlt } = utils.hookResult.result.current;

    expect(visitGitHubAlt).toBe(NAMESPACES.PROJECTS.VISIT_GITHUB_ALT);
    expect(visitProjectAlt).toBe(NAMESPACES.PROJECTS.VISIT_PROJECT_ALT);
  });
});
