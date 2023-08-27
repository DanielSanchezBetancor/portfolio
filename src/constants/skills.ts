import IconJavascript from "@public/icon/icon-javascript.svg";
import IconReact from "@public/icon/icon-react.svg";
import IconNextJS from "@public/icon/icon-nextjs.svg";
import IconHTML from "@public/icon/icon-html.svg";
import IconCSS from "@public/icon/icon-css.svg";
import IconSASS from "@public/icon/icon-sass.svg";
import IconJest from "@public/icon/icon-jest.svg";
import IconCypress from "@public/icon/icon-cypress.svg";
import IconRedux from "@public/icon/icon-redux.svg";
import { ISkillItem } from "@src/layouts/SkillsLayout/components/SkillsCards/interfaces";

const SKILLS: ISkillItem[] = [
  {
    skill: "JavaScript",
    icon: IconJavascript,
    alt: "project.iconJavascriptAlt",
  },
  {
    skill: "ReactJS",
    icon: IconReact,
    alt: "project.iconReactAlt",
  },
  {
    skill: "NextJS",
    icon: IconNextJS,
    alt: "project.iconNextJsAlt",
  },
  {
    skill: "HTML5",
    icon: IconHTML,
    alt: "project.iconHtmlAlt",
  },
  {
    skill: "CSS3",
    icon: IconCSS,
    alt: "project.iconCssAlt",
  },
  {
    skill: "SASS",
    icon: IconSASS,
    alt: "project.iconSassAlt",
  },
  {
    skill: "Jest",
    icon: IconJest,
    alt: "project.iconJestAlt",
  },
  {
    skill: "Cypress",
    icon: IconCypress,
    alt: "project.iconCypressAlt",
  },
  {
    skill: "Redux",
    icon: IconRedux,
    alt: "project.iconReduxAlt",
  },
];

export { SKILLS };
