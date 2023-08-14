import { render } from "@src/test/test-utils";
import { CORRECT_MOCK, EMPTY_SKILLS_MOCK } from "../../mocks/__mock";
import Tags from "./Tags";
import { ITagsProps } from "./interfaces";

const setup = (componentProps: ITagsProps) => {
  const context = render(<Tags {...componentProps} />);

  return {
    context,
  };
};

describe("Tags Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK);

    const tags = utils.context.getByTestId("tags");

    expect(tags).toBeInTheDocument();
    expect(tags.children).toHaveLength(CORRECT_MOCK.skills.length);
  });
  it("should render the component without list", () => {
    const utils = setup(EMPTY_SKILLS_MOCK);

    const tags = utils.context.getByTestId("tags");

    expect(tags).toBeInTheDocument();
    expect(tags.children).toHaveLength(0);
  });
});
