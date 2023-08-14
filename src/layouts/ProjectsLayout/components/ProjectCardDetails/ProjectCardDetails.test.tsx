import { render } from "@src/test/test-utils";
import ProjectCardDetails from "./ProjectCardDetails";
import { IProjectCardDetailsProps } from "./interfaces";
import { PROJECTS } from "@src/constants";
import { NAMESPACES } from "@src/i18n/namespaces";

const setup = (componentProps: IProjectCardDetailsProps) => {
  const context = render(<ProjectCardDetails {...componentProps} />);

  return {
    context,
  };
};

describe("Project Card Details Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(PROJECTS[0]);

    const projectCardDetails = utils.context.getByTestId(
      "project-card-details"
    );
    const projectCardDetailsHeader = utils.context.getByTestId(
      "project-card-details-header"
    );
    const projectCardDetailsHeaderLinks = utils.context.getByTestId(
      "project-card-details-header-links"
    );
    const projectCardDetailsDescription = utils.context.getByTestId(
      "project-card-details-description"
    );
    const githubAlt = utils.context.getByAltText(
      NAMESPACES.PROJECTS.VISIT_GITHUB_ALT
    );
    const websiteAlt = utils.context.getByAltText(
      NAMESPACES.PROJECTS.VISIT_PROJECT_ALT
    );

    expect(projectCardDetails).toBeInTheDocument();
    expect(projectCardDetailsHeader).toBeInTheDocument();
    expect(projectCardDetailsHeaderLinks).toBeInTheDocument();
    expect(projectCardDetailsDescription).toBeInTheDocument();
    expect(githubAlt).toBeInTheDocument();
    expect(websiteAlt).toBeInTheDocument();
  });
  it("should render correct props", () => {
    const utils = setup(PROJECTS[0]);

    const title = utils.context.getByText(PROJECTS[0].title);
    const description = utils.context.getByText(PROJECTS[0].description);
    const projectCardDetailsHeaderLinks = utils.context.getByTestId(
      "project-card-details-header-links"
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(projectCardDetailsHeaderLinks.children[0].getAttribute("href")).toBe(
      PROJECTS[0].linkGithub
    );
    expect(projectCardDetailsHeaderLinks.children[1].getAttribute("href")).toBe(
      PROJECTS[0].linkWebsite
    );
  });
});
