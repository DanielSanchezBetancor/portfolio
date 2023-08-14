import { render } from "@src/test/test-utils";
import ButtonCV from "./ButtonCV";
import { NAMESPACES } from "@src/i18n/namespaces";

const setup = () => {
  const context = render(<ButtonCV />);

  return {
    context,
  };
};

describe("Button CV Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const downloadCV = utils.context.getByTestId("download-cv");

    expect(downloadCV).toBeInTheDocument();
    expect(downloadCV).toHaveTextContent(NAMESPACES.BUTTONS.DOWNLOAD_CV);
  });
});
