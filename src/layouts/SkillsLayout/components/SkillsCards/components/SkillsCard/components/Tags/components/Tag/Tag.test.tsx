import { render } from "@src/test/test-utils";
import Tag from "./Tag";
import { ISkillItem } from "@src/layouts/SkillsLayout/components/SkillsCards/interfaces";
import { CORRECT_MOCK } from "../../../../mocks/__mock";

const setup = (componentProps: ISkillItem) => {
  const context = render(<Tag {...componentProps} />);

  return {
    context,
  };
};

describe("Tag Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK.skills[0]);

    const tag = utils.context.getByTestId("tag");
    const tagIcon = utils.context.getByTestId("tag-icon");
    const tagSkill = utils.context.getByTestId("tag-skill");

    const srcWithoutSlash = CORRECT_MOCK.skills[0].icon.src.substring(1);

    expect(tag).toBeInTheDocument();
    expect(tagIcon).toBeInTheDocument();
    expect(tagSkill).toBeInTheDocument();
    expect(tagIcon.getAttribute("src")).toMatch(srcWithoutSlash);
    expect(tagIcon.getAttribute("alt")).toBe(CORRECT_MOCK.skills[0].alt);
    expect(tagSkill.textContent).toBe(CORRECT_MOCK.skills[0].skill);
  });
});
