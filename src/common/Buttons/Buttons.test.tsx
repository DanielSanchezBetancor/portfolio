import { render } from "@src/test/test-utils";
import Buttons from "./Buttons";
import { IButtonsProps } from "./interfaces";
import { CORRECT_MOCK, MODIFIED_MOCK } from "./mocks/__mock";
import { NAMESPACES } from "@src/i18n/namespaces";

const setup = (componentProps: IButtonsProps) => {
  const context = render(
    <Buttons goTo={componentProps.goTo} color={componentProps.color}>
      {componentProps.children}
    </Buttons>
  );

  return {
    context,
  };
};

describe("Buttons Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK);

    const wrapper = utils.context.getByTestId("wrapper");
    const wrapperButton = utils.context.getByTestId("wrapper-button");

    expect(wrapper).toBeInTheDocument();
    expect(wrapperButton).toBeInTheDocument();
  });
  it("should render the CV button", () => {
    const utils = setup(CORRECT_MOCK);

    const cvButton = utils.context.getByText(NAMESPACES.BUTTONS.DOWNLOAD_CV);

    expect(cvButton).toBeInTheDocument();
  });
  it("should render the Image button", () => {
    const utils = setup(MODIFIED_MOCK);

    const alts = utils.context.getAllByAltText("alt");

    expect(alts).toBeDefined();
    expect(alts).toHaveLength(2);
  });
  it("should not have any class if color is not provided", () => {
    const utils = setup(CORRECT_MOCK);

    const wrapperButton = utils.context.getByTestId("wrapper-button");

    expect(wrapperButton.classList).toHaveLength(0);
  });
  it("should have a class if color is provided", () => {
    const utils = setup(MODIFIED_MOCK);

    const wrapperButton = utils.context.getByTestId("wrapper-button");

    expect(wrapperButton.classList).toHaveLength(1);
    expect(wrapperButton.classList[0]).toBe("blue");
  });
});
