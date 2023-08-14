import { NAMESPACES } from "@src/i18n/namespaces";
import { render } from "@src/test/test-utils";
import { act, fireEvent } from "@testing-library/react";
import AboutMeTable from "./AboutMeTable";

const setup = () => {
  const context = render(<AboutMeTable />);

  return {
    context,
  };
};

describe("About Me Table Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const aboutMeTable = utils.context.getByTestId("about-me-table");
    const aboutMeTableHeader = utils.context.getByTestId(
      "about-me-table-header"
    );
    const aboutMeTableHeaderProfile = utils.context.getByTestId(
      "about-me-table-header-profile"
    );
    const aboutMeTableHeaderExperience = utils.context.getByTestId(
      "about-me-table-header-experience"
    );

    expect(aboutMeTable).toBeInTheDocument();
    expect(aboutMeTableHeader).toBeInTheDocument();
    expect(aboutMeTableHeaderProfile).toBeInTheDocument();
    expect(aboutMeTableHeaderExperience).toBeInTheDocument();
    expect(aboutMeTable.children).toHaveLength(2);
    expect(aboutMeTableHeaderProfile.classList).toHaveLength(2);
    expect(aboutMeTableHeaderExperience.classList).toHaveLength(3);
    expect(aboutMeTableHeaderProfile).toHaveTextContent(
      NAMESPACES.ABOUT_ME.PROFILE
    );
    expect(aboutMeTableHeaderExperience).toHaveTextContent(
      NAMESPACES.ABOUT_ME.EXPERIENCE
    );
  });
  it("should change class list when firing set active as true", () => {
    const utils = setup();

    const aboutMeTableHeaderProfile = utils.context.getByTestId(
      "about-me-table-header-profile"
    );
    const aboutMeTableHeaderExperience = utils.context.getByTestId(
      "about-me-table-header-experience"
    );

    expect(aboutMeTableHeaderProfile.classList).toHaveLength(2);

    act(() => {
      fireEvent.click(aboutMeTableHeaderExperience);
    });

    expect(aboutMeTableHeaderProfile.classList).toHaveLength(3);
  });
  it("should change class list when firing set active as false", () => {
    const utils = setup();

    const aboutMeTableHeaderProfile = utils.context.getByTestId(
      "about-me-table-header-profile"
    );

    const aboutMeTableHeaderExperience = utils.context.getByTestId(
      "about-me-table-header-experience"
    );

    expect(aboutMeTableHeaderExperience.classList).toHaveLength(3);

    act(() => {
      fireEvent.click(aboutMeTableHeaderExperience);
    });

    expect(aboutMeTableHeaderExperience.classList).toHaveLength(2);

    act(() => {
      fireEvent.click(aboutMeTableHeaderProfile);
    });

    expect(aboutMeTableHeaderExperience.classList).toHaveLength(3);
  });
});
