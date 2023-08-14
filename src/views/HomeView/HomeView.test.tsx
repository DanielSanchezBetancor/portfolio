import { render } from "@src/test/test-utils";
import HomeView from "./HomeView";

const setup = () => {
  const context = render(<HomeView />);

  return {
    context,
  };
};

describe("Home View Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const main = utils.context.getByTestId("main");

    expect(main).toBeInTheDocument();
    expect(main.previousSibling).toBeInTheDocument();
    expect(main.children).toHaveLength(3);
  });
});
