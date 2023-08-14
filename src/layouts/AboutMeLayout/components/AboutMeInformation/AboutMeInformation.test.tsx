import { render } from "@src/test/test-utils";
import AboutMeInformation from "./AboutMeInformation";
import { NAMESPACES } from "@src/i18n/namespaces";

const setup = () => {
  const context = render(<AboutMeInformation />);

  return {
    context,
  };
};

describe("About Me Information Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const wrapper = utils.context.getByTestId("wrapper");
    const information1 = utils.context.getByTestId("information-text-1");
    const information2 = utils.context.getByTestId("information-text-2");
    const information3 = utils.context.getByTestId("information-text-3");
    const information4 = utils.context.getByTestId("information-text-4");
    const information5 = utils.context.getByTestId("information-text-5");

    expect(wrapper).toBeInTheDocument();
    expect(information1).toBeInTheDocument();
    expect(information2).toBeInTheDocument();
    expect(information3).toBeInTheDocument();
    expect(information4).toBeInTheDocument();
    expect(information5).toBeInTheDocument();
    expect(information1.textContent).toBe(NAMESPACES.ABOUT_ME.I_AM);
    expect(information2.textContent).toBe("Daniel");
    expect(information3.textContent).toBe("Sánchez");
    expect(information4.textContent).toBe(NAMESPACES.ABOUT_ME.FULLSTACK);
    expect(information5.textContent).toBe(NAMESPACES.ABOUT_ME.FRONT_SPECIALIST);
  });
});
