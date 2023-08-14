import IllustrationMobile from "@public/illustration-mobile.png";
import Illustration from "@public/illustration.png";
import Image from "next/image";
import React from "react";
import useIllustrationImage from "./hooks/useIllustrationImage";
import styles from "./styles.module.scss";

const { desktop, mobile } = styles;

const IllustrationImage: React.FC = () => {
  const { illustrationLabel } = useIllustrationImage();

  return (
    <>
      <Image src={Illustration} alt={illustrationLabel} className={desktop} />
      <Image
        src={IllustrationMobile}
        alt={illustrationLabel}
        className={mobile}
        height={110}
      />
    </>
  );
};

export default IllustrationImage;
