import { NAMESPACES } from "@src/i18n/namespaces";
import { render } from "@src/test/test-utils";
import IllustrationImage from "./IllustrationImage";

const setup = () => {
  const context = render(<IllustrationImage />);

  return {
    context,
  };
};


describe("Illustration Image Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const images = utils.context.getAllByRole("img");
    const alt = utils.context.getAllByAltText(NAMESPACES.SKILLS.ILLUSTRATION_ALT);

    expect(images).toHaveLength(2);
    expect(images[0]).toBeVisible();
    expect(images[1]).toBeVisible();
    expect(alt).toHaveLength(2);
    expect(alt[0]).toBeVisible();
    expect(alt[1]).toBeVisible();
  });
});
