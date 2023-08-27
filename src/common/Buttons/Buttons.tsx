import Link from "next/link";
import React from "react";
import { IButtonsProps } from "./interfaces";
import styles from "./styles.module.scss";

const { wrapper } = styles;

const Buttons: React.FC<IButtonsProps> = ({
  children,
  goTo,
  color,
  download,
}) => {
  const finalClassName = color ?? "gradient";
  return (
    <div className={wrapper} data-testid={"wrapper"}>
      <Link href={goTo} download={download ?? false} target={"_blank"}>
        <button className={finalClassName} data-testid={"wrapper-button"}>
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
