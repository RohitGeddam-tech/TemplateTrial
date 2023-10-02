/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";
import { Navbar } from "../Components/organism/Navbar";
import BannerCarousel from "../Components/molecules/Carousel/BannerCarousel";
import { Banner } from "../Components/organism/Banner";

const Theme1 = () => {
  const menu = [
    {
      label: "link",
      link: "/",
    },
    {
      label: "link",
      link: "/theme1",
    },
    {
      label: "link",
      link: "/theme2",
    },
  ];
  return (
    <div className="theme2">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
        </style>
      </Head>
      <Navbar menu={menu} />
      <div style={{ marginTop: "81px" }}>
        <BannerCarousel slidesToShow={1} arrow={true} dots={true}>
          <Banner opacity="full" />
          <Banner />
          <Banner opacity="no" alignment="left" />
          <Banner opacity="no" alignment="center" />
        </BannerCarousel>
      </div>
    </div>
  );
};

export default Theme1;
