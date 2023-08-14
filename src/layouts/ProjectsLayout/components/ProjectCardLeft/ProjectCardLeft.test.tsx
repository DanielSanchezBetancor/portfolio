import { render } from "@src/test/test-utils";
import ProjectCardLeft from "./ProjectCardLeft";
import { PROJECTS } from "@src/constants";
import { IProject } from "../../interfaces";

const setup = (componentProps: IProject) => {
  const context = render(<ProjectCardLeft {...componentProps} />);

  return {
    context,
  };
};

describe("Project Card Left Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(PROJECTS[0]);

    const projectCardLeft = utils.context.getByTestId("project-card-left");
    const projectCardLeftSlider = utils.context.getByTestId(
      "project-card-left-slider"
    );
    const projectCardLeftImage = utils.context.getByTestId(
      "project-card-left-image"
    );
    const projectCardLeftSeparator = utils.context.getByTestId(
      "project-card-left-separator"
    );
    const projectCardLeftEmptyGrid = utils.context.getByTestId(
      "project-card-left-empty-grid"
    );

    const srcWithoutSlash = PROJECTS[0].backgroundImage.src.substring(1);

    expect(projectCardLeft).toBeInTheDocument();
    expect(projectCardLeftSlider).toBeInTheDocument();
    expect(projectCardLeftImage).toBeInTheDocument();
    expect(projectCardLeftSeparator).toBeInTheDocument();
    expect(projectCardLeftEmptyGrid).toBeInTheDocument();
    expect(projectCardLeft.children).toHaveLength(3);
    expect(projectCardLeftSlider.children.length).toBeGreaterThan(0);
    expect(projectCardLeftSlider.children.length).toBeLessThan(4);
    expect(projectCardLeftSeparator).toHaveTextContent(PROJECTS[0].date);
    expect(projectCardLeftImage.getAttribute("src")).toMatch(srcWithoutSlash);
    expect(projectCardLeftImage.getAttribute("alt")).toBe(
      PROJECTS[0].backgroundImageAlt
    );
  });
});
