import { render } from "@src/test/test-utils";
import FooterLayout from "./FooterLayout";

const setup = () => {
  const context = render(<FooterLayout />);

  return {
    context,
  };
};

describe("Footer Layout Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const footer = utils.context.getByTestId("footer");
    const footerName = utils.context.getByTestId("footer-name");
    const footerSocials = utils.context.getByTestId("footer-socials");

    expect(footer).toBeInTheDocument();
    expect(footerName).toBeInTheDocument();
    expect(footerSocials).toBeInTheDocument();
    expect(footerSocials.children).toHaveLength(3);
  });
});
