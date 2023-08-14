import { render } from "@src/test/test-utils";
import SkillsCard from "./SkillsCard";
import { ISkillsCardProps } from "./interfaces";
import { CORRECT_MOCK, EMPTY_SKILLS_MOCK } from "./mocks/__mock";

const setup = (componentProps: ISkillsCardProps) => {
  const context = render(<SkillsCard {...componentProps} />);

  return {
    context,
  };
};

describe("Skills Card Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK);

    const skillsCard = utils.context.getByTestId("skills-card");
    const skillsCardHeader = utils.context.getByTestId("skills-card-header");
    const skillsCardHeaderIcon = utils.context.getByTestId(
      "skills-card-header-icon"
    );
    const skillsCardHeaderTitle = utils.context.getByTestId(
      "skills-card-header-title"
    );
    const skillsCardBody = utils.context.getByTestId("skills-card-body");
    const skillsCardBodyDescription = utils.context.getByTestId(
      "skills-card-body-description"
    );

    expect(skillsCard).toBeInTheDocument();
    expect(skillsCardHeader).toBeInTheDocument();
    expect(skillsCardHeaderIcon).toBeInTheDocument();
    expect(skillsCardHeaderTitle).toBeInTheDocument();
    expect(skillsCardBody).toBeInTheDocument();
    expect(skillsCardBodyDescription).toBeInTheDocument();
    expect(skillsCardBody.children).toHaveLength(2);
  });
  it("should render the same ammount of childs if skills are empty", () => {
    const utils = setup(EMPTY_SKILLS_MOCK);

    const skillsCardBody = utils.context.getByTestId("skills-card-body");

    expect(skillsCardBody).toBeInTheDocument();
    expect(skillsCardBody.children).toHaveLength(2);
  });
  it("should stablish correct props on the component", () => {
    const utils = setup(CORRECT_MOCK);

    const skillsCardHeaderIcon = utils.context.getByTestId(
      "skills-card-header-icon"
    );

    const firstSkillLabel = utils.context.getByText(
      CORRECT_MOCK.skills[0].skill
    );
    const titleLabel = utils.context.getByText(CORRECT_MOCK.title);
    const descriptionLabel = utils.context.getByText(CORRECT_MOCK.description);

    const srcWithoutSlash = CORRECT_MOCK.icon.src.substring(1);

    expect(firstSkillLabel).toBeInTheDocument();
    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();
    expect(skillsCardHeaderIcon.getAttribute("src")).toMatch(srcWithoutSlash);
    expect(skillsCardHeaderIcon.getAttribute("alt")).toBe(CORRECT_MOCK.iconAlt);
  });
});
