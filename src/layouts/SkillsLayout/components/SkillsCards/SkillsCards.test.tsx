import { render } from "@src/test/test-utils";
import SkillsCards from "./SkillsCards";
import { NAMESPACES } from "@src/i18n/namespaces";

const setup = () => {
  const context = render(<SkillsCards />);

  return {
    context,
  };
};

describe("Skills Cards Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const skillsCards = utils.context.getByTestId("skills-cards");
    const developmentLabel = utils.context.getByText(
      NAMESPACES.SKILLS.DEVELOPMENT
    );
    const developmentDescriptionLabel = utils.context.getByText(
      NAMESPACES.SKILLS.DEVELOPMENT_DESCRIPTION
    );
    const softSkillsLabel = utils.context.getByText(
      NAMESPACES.SKILLS.SOFT_SKILLS
    );
    const softSkillsDescriptionLabel = utils.context.getByText(
      NAMESPACES.SKILLS.SOFT_SKILLS_DESCRIPTION
    );
    const iconDevAlt = utils.context.getByAltText(NAMESPACES.SKILLS.ICON_DEV_ALT);
    const iconSoftSkillAlt = utils.context.getByAltText(
      NAMESPACES.SKILLS.ICON_SOFT_SKILLS_ALT
    );

    expect(skillsCards).toBeInTheDocument();
    expect(developmentLabel).toBeInTheDocument();
    expect(developmentDescriptionLabel).toBeInTheDocument();
    expect(softSkillsLabel).toBeInTheDocument();
    expect(softSkillsDescriptionLabel).toBeInTheDocument();
    expect(iconDevAlt).toBeInTheDocument();
    expect(iconSoftSkillAlt).toBeInTheDocument();
    expect(skillsCards.children).toHaveLength(2);
  });
});
