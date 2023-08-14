"use client";

import i18n from "@src/i18n/i18n";
import HomeView from "@src/views/HomeView";
import { withTranslation } from "react-i18next";

const Home = () => {
  const {language} = i18n;
  return (
    <html lang={language}>
      <body>
        <HomeView />
      </body>
    </html>
  );
};

export default withTranslation()(Home);
