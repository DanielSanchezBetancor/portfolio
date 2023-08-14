import { PROJECTS } from "@src/constants";
import { render } from "@src/test/test-utils";
import { IProject } from "../../interfaces";
import ProjectCardRight from "./ProjectCardRight";

const setup = (componentProps: IProject) => {
  const context = render(<ProjectCardRight {...componentProps} />);

  return {
    context,
  };
};

describe("Project Card Right Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(PROJECTS[0]);

    const projectCardRight = utils.context.getByTestId("project-card-right");
    const projectCardRightSlider = utils.context.getByTestId(
      "project-card-right-slider"
    );
    const projectCardRightImage = utils.context.getByTestId(
      "project-card-right-image"
    );
    const projectCardRightSeparator = utils.context.getByTestId(
      "project-card-right-separator"
    );
    const projectCardRightEmptyGrid = utils.context.getByTestId(
      "project-card-right-empty-grid"
    );

    const srcWithoutSlash = PROJECTS[0].backgroundImage.src.substring(1);

    expect(projectCardRight).toBeInTheDocument();
    expect(projectCardRightSlider).toBeInTheDocument();
    expect(projectCardRightImage).toBeInTheDocument();
    expect(projectCardRightSeparator).toBeInTheDocument();
    expect(projectCardRightEmptyGrid).toBeInTheDocument();
    expect(projectCardRight.children).toHaveLength(3);
    expect(projectCardRightSlider.children.length).toBeGreaterThan(0);
    expect(projectCardRightSlider.children.length).toBeLessThan(4);
    expect(projectCardRightSeparator).toHaveTextContent(PROJECTS[0].date);
    expect(projectCardRightImage.getAttribute("src")).toMatch(srcWithoutSlash);
    expect(projectCardRightImage.getAttribute("alt")).toBe(
      PROJECTS[0].backgroundImageAlt
    );
  });
});
