import { render } from "@src/test/test-utils";
import AboutMeLayout from "./AboutMeLayout";
import React from "react";

const setup = () => {
  const refSpy = React.createRef<HTMLElement>();
  const context = render(<AboutMeLayout aboutMeRef={refSpy} />);

  return {
    context,
  };
};

describe("About Me Layout Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const aboutMe = utils.context.getByTestId("about-me");

    expect(aboutMe).toBeInTheDocument();
    expect(aboutMe.children).toHaveLength(2);
  });
});
