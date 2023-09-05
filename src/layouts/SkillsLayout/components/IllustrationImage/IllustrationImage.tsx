import IllustrationMobile from "@public/img/illustration-mobile.png";
import Illustration from "@public/img/illustration.png";
import Image from "next/image";
import React from "react";
import useIllustrationImage from "./hooks/useIllustrationImage";
import styles from "./styles.module.scss";

const { desktop, mobile } = styles;

const IllustrationImage: React.FC = () => {
  const { illustrationLabel } = useIllustrationImage();

  return (
    <Image src={Illustration} alt={illustrationLabel} className={desktop} />
  );
};

export default IllustrationImage;
