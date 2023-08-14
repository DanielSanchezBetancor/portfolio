import { render } from "@src/test/test-utils";
import ButtonIcon from "./ButtonIcon";
import { IButtonIconProps } from "./interfaces";
import { CORRECT_MOCK } from "./mocks/__mock";

const setup = (componentProps: IButtonIconProps) => {
  const context = render(<ButtonIcon {...componentProps} />);

  return {
    context,
  };
};

describe("Button Icon Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK);

    const buttonImageLight = utils.context.getByTestId("button-icon-light");
    const buttonImageDark = utils.context.getByTestId("button-icon-dark");

    expect(buttonImageLight).toBeInTheDocument();
    expect(buttonImageDark).toBeInTheDocument();
    expect(buttonImageLight.getAttribute("alt")).toBe("alt");
    expect(buttonImageDark.getAttribute("alt")).toBe("alt");
  });
});
