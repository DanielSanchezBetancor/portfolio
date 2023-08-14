import ButtonCV from "../components/ButtonCV";
import ButtonIcon from "../components/ButtonIcon";
import { IButtonsProps } from "../interfaces";
import IconLinkedin from "@public/icon-linkedin.svg";
import IconLinkedinWhite from "@public/icon-linkedin-white.svg";

const CORRECT_MOCK: IButtonsProps = {
  children: <ButtonCV />,
  goTo: 'goTo'
};
const MODIFIED_MOCK: IButtonsProps = {
  children: (
    <ButtonIcon alt="alt" icon={IconLinkedin} iconWhite={IconLinkedinWhite} />
  ),
  color: "blue",
  goTo: 'goTo'
};

export { CORRECT_MOCK, MODIFIED_MOCK };
