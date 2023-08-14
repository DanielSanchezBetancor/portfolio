import { NAMESPACES } from "@src/i18n/namespaces";
import { renderHook } from "@testing-library/react";
import useButtonCV from "./useButtonCV";

const setup = () => {
  const hookResult = renderHook(useButtonCV);

  return {
    hookResult,
  };
};

describe("Use Button CV Test Suite", () => {
  it("should give values", () => {
    const utils = setup();
    const { downloadCVLabel } = utils.hookResult.result.current;

    expect(downloadCVLabel).toBe(NAMESPACES.BUTTONS.DOWNLOAD_CV);
  });
});
