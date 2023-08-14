import useProjectsLayout from "./useProjectsLayout";
import { renderHook } from "@testing-library/react";
import { NAMESPACES } from "@src/i18n/namespaces";

const setup = () => {
  const hookResult = renderHook(useProjectsLayout);

  return {
    hookResult,
  };
};

describe("Use Projects Layout Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { projectsLabel } = utils.hookResult.result.current;

    expect(projectsLabel).toBe(NAMESPACES.PROJECTS.TITLE);
  });
});
