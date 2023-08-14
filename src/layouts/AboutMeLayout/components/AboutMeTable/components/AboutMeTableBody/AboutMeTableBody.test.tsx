import { EXPERIENCE } from "@src/constants/experience";
import { NAMESPACES } from "@src/i18n/namespaces";
import { render } from "@src/test/test-utils";
import AboutMeTableBody from "./AboutMeTableBody";
import { IAboutMeTableBodyProps } from "./interfaces";
import { CORRECT_MOCK, MODIFIED_MOCK } from "./mocks/__mock";

const setup = (componentProps: IAboutMeTableBodyProps) => {
  const context = render(<AboutMeTableBody {...componentProps} />);

  return {
    context,
  };
};

describe("About Me Table Body Test Suite", () => {
  it("should render the component", () => {
    const utils = setup(CORRECT_MOCK);

    const aboutMeTableBody = utils.context.getByTestId("about-me-table-body");
    const aboutMeTableBodyLeft = utils.context.getByTestId(
      "about-me-table-body-left"
    );
    const aboutMeTableBodyLeftImage = utils.context.getByTestId(
      "about-me-table-body-left-image"
    );
    const aboutMeTableBodyLeftInformation = utils.context.getByTestId(
      "about-me-table-body-left-information"
    );
    const aboutMeTableBodyLeftInformationAboutMe = utils.context.getByTestId(
      "about-me-table-body-left-information-about-me"
    );
    const aboutMeTableBodyLeftInformationActions = utils.context.getByTestId(
      "about-me-table-body-left-information-actions"
    );
    const aboutMeTableBodyRight = utils.context.getByTestId(
      "about-me-table-body-right"
    );
    const aboutMeTableBodyRightWrapper = utils.context.getByTestId(
      "about-me-table-body-right-wrapper"
    );
    const aboutMeTableBodyRightTitle = utils.context.getByTestId(
      `about-me-table-body-right-${EXPERIENCE[0].title}`
    );
    const tableTitle = utils.context.getByTestId(
      `table-${EXPERIENCE[0].title}`
    );
    const tablePlace = utils.context.getByTestId(
      `table-${EXPERIENCE[0].title}-place`
    );
    const tableExperiences = utils.context.getByTestId("table-experiences");

    expect(aboutMeTableBody).toBeInTheDocument();
    expect(aboutMeTableBodyLeft).toBeInTheDocument();
    expect(aboutMeTableBodyLeftImage).toBeInTheDocument();
    expect(aboutMeTableBodyLeftInformation).toBeInTheDocument();
    expect(aboutMeTableBodyLeftInformationAboutMe).toBeInTheDocument();
    expect(aboutMeTableBodyLeftInformationActions).toBeInTheDocument();
    expect(aboutMeTableBodyRight).toBeInTheDocument();
    expect(aboutMeTableBodyRightWrapper).toBeInTheDocument();
    expect(aboutMeTableBodyRightTitle).toBeInTheDocument();
    expect(tableTitle).toBeInTheDocument();
    expect(tablePlace).toBeInTheDocument();
    expect(tableExperiences).toBeInTheDocument();
    expect(aboutMeTableBodyLeftImage.getAttribute("alt")).toBe(
      NAMESPACES.ABOUT_ME.THATS_ME
    );
    expect(aboutMeTableBodyLeftInformationActions.children).toHaveLength(3);
    expect(tableTitle).toHaveTextContent(EXPERIENCE[0].title);
    expect(tablePlace).toHaveTextContent(
      `${EXPERIENCE[0].place} ${EXPERIENCE[0].date}`
    );
    expect(tableExperiences.children).toHaveLength(
      EXPERIENCE[0].experience?.length ?? 0
    );
  });
  it("should not have right panel active classname", () => {
    const utils = setup(CORRECT_MOCK);

    const aboutMeTableBody = utils.context.getByTestId("about-me-table-body");

    expect(aboutMeTableBody.classList).toHaveLength(1);
  });
  it("should have right panel active classname", () => {
    const utils = setup(MODIFIED_MOCK);

    const aboutMeTableBody = utils.context.getByTestId("about-me-table-body");

    expect(aboutMeTableBody.classList).toHaveLength(2);
    expect(aboutMeTableBody.classList[1]).toBe("rightActivePanel");
  });
});
