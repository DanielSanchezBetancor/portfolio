"use client";

import i18n from "@src/i18n/i18n";
import HomeView from "@src/views/HomeView";

const Home = () => {
  const { language } = i18n;
  return (
    <html lang={language}>
        <HomeView />
    </html>
  );
};

export default Home;
