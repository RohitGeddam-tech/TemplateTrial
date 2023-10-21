/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import BannerCarousel from "../Components/molecules/Carousel/BannerCarousel";
import { Banner } from "../Components/organism/Banner";
import axios from "axios";
import { About } from "../Components/organism/About";
import { Footer } from "../Components/organism/Footer";
import { apiQuery } from "../utils/apiQuery";
import CommonComponent from "../Components/CommonComponent";

const Theme1 = () => {
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
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const data = {
        query: `
          query {
            pageBranch{
              data{
                attributes{
                  components{
                    __typename
                    ${apiQuery}
                  }
                }
              }
            }
          }
          `,
      };
      const response = await axios
        .post("https://buildercms.aashirwadlab.co.in/graphql", data)
        .then((res) => res);
      console.log(response.data.data.pageBranch?.data.attributes.components);
      // return response.data.data;
      setState([...response.data.data.pageBranch?.data.attributes.components]);
    }
    fetchData();
  }, []);
  return (
    <div className="theme1">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
      </Head>
      {state.length > 0 ? (
        <>
          <Navbar />
          <div style={{ marginTop: "81px" }}>
            {state.map((doc: any, ind: number) => (
              <div key={ind}>
                <CommonComponent data={doc} />
              </div>
            ))}
          </div>
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
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Theme1;
