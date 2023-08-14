import { NAMESPACES } from "@src/i18n/namespaces";
import { renderHook } from "@testing-library/react";
import useFooterLayout from "./useFooterLayout";

const setup = () => {
  const hookResult = renderHook(useFooterLayout);

  return {
    hookResult,
  };
};

describe("Use Footer Layout Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { visitLinkedinAlt, visitGithubAlt } =
      utils.hookResult.result.current;

    expect(visitLinkedinAlt).toBe(NAMESPACES.FOOTER.VISIT_LINKEDIN_ALT);
    expect(visitGithubAlt).toBe(NAMESPACES.FOOTER.VISIT_GITHUB_ALT);
  });
});
