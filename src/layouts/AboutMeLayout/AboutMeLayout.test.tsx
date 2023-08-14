import { render } from "@src/test/test-utils";
import AboutMeLayout from "./AboutMeLayout";

const setup = () => {
  const context = render(<AboutMeLayout />);

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
