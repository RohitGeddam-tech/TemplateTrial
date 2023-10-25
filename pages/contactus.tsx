/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import axios from "axios";
import { Footer } from "../Components/organism/Footer";
import { apiQuery } from "../utils/apiQuery";
import CommonComponent from "../Components/CommonComponent";

const Theme1 = () => {
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

  async function fetchData() {
    const data = {
      query: `
        query {
          pageContactUs {
            data {
              attributes {
                components {
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
    // console.log(response.data.data.pageContactUs?.data.attributes.components);
    // return response.data.data;
    setState([...response.data.data.pageContactUs?.data.attributes.components]);
  }
  useEffect(() => {
    state.length === 0 && fetchData();
  }, [state]);

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
          <Footer />
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Theme1;
