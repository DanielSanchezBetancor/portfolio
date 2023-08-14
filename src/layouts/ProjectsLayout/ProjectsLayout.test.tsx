import { render } from "@src/test/test-utils";
import ProjectsLayout from "./ProjectsLayout";
import React from "react";
import { PROJECTS } from "@src/constants";

const setup = () => {
  const refSpy = React.createRef<HTMLDivElement>();
  const context = render(<ProjectsLayout projectsRef={refSpy} />);

  return {
    context,
  };
};

describe("Projects Layout Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const projectsSection = utils.context.getByTestId("projects");
    const projectsTitle = utils.context.getByTestId("projects-title");
    const projectsGrid = utils.context.getByTestId("projects-grid");

    expect(projectsSection).toBeInTheDocument();
    expect(projectsTitle).toBeInTheDocument();
    expect(projectsGrid).toBeInTheDocument();
    expect(projectsGrid.children).toHaveLength(PROJECTS.length * 3);
  });
});
