import React from "react";
import useButtonCV from "./hooks/useButtonCV";
import Link from "next/link";

const ButtonCV: React.FC = () => {
  const { downloadCVLabel } = useButtonCV();
  return (
    <>
      <span className="text__bold" data-testid={"download-cv"}>
        {downloadCVLabel}
      </span>
    </>
  );
};

export default ButtonCV;
