/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React from "react";
import { Navbar } from "../Components/organism/Navbar";
import BannerCarousel from "../Components/molecules/Carousel/BannerCarousel";
import { Banner } from "../Components/organism/Banner";
import { TitleCard } from "../Components/organism/TitleCard";
import { cardData } from ".";
import { Contact } from "../Components/organism/Contact";
import { Footer } from "../Components/organism/Footer";

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
  const inputBox = [
    {
      label: "Name",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      required: true,
    },
    {
      label: "Mobile",
      type: "number",
      required: true,
    },
    {
      label: "Message",
      type: "textarea",
      required: false,
    },
  ];
  const footerLinks = [
    {
      label: "link",
      link: "#",
    },
    {
      label: "link",
      link: "#",
    },
    {
      label: "link",
      link: "#",
    },
  ];

  const sm = [
    {
      image: "/Facebook.png",
      link: "#",
    },
    {
      image: "/Twitter.png",
      link: "#",
    },
    {
      image: "/Pinterest.png",
      link: "#",
    },
    {
      image: "/Instagram.png",
      link: "#",
    },
    {
      image: "/Google.png",
      link: "#",
    },
  ];
  return (
    <div className="theme1">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      <Navbar menu={menu} />
      <div style={{ marginTop: "81px" }}>
        {/* <BannerCarousel slidesToShow={1} arrow={true} dots={true}>
          <Banner textAlign="left" />
          <Banner opacity="full" />
          <Banner
            opacity="no"
            alignment="center"
            bgColor="--secondary-lightest"
          />
        </BannerCarousel> */}
        <Banner opacity="no" alignment="left" bgColor="--primary-lightest" />
      </div>
      <TitleCard
        carousel={true}
        carouselProps={{
          slidesToShow: 2.7,
          arrow: true,
          dots: true,
          children: [],
        }}
        data={[...cardData]}
        cardType="default"
        title="Our Services"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <TitleCard
        data={cardData.slice(0, 4)}
        cardType="team"
        bgColor="--secondary-lightest"
        view="grid"
        title="Our Team"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Contact
        inputBox={inputBox}
        // details={details}
        formAlignment="right"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Footer
        text="© 2018 Froala. All Rights Reserved"
        bgColor="--primary-lightest"
        links={footerLinks}
        sm={sm}
        variant={6}
        image="https://staging.sugarlogger.com/static/media/Logo.652fce25.svg"
        complex={{
          group1: footerLinks,
          group2: footerLinks,
          sm: sm,
          about: {
            title: "About Us",
            para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          },
        }}
      />
    </div>
  );
};

export default Theme1;
