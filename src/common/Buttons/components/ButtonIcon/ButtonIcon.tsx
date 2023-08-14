import Image from "next/image";
import React from "react";
import { IButtonIconProps } from "./interfaces";

const ButtonIcon: React.FC<IButtonIconProps> = ({ icon, iconWhite, alt }) => {
  return (
    <>
      <Image src={icon} alt={alt} data-testid={"button-icon-light"} />
      <Image src={iconWhite} alt={alt} data-testid={"button-icon-dark"} />
    </>
  );
};

export default ButtonIcon;
