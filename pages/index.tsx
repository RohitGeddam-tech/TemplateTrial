/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import { Footer } from "../Components/organism/Footer";
import axios from "axios";
import { apiQuery, seo } from "../utils/apiQuery";
import CommonComponent from "../Components/CommonComponent";
import { ConfigData } from "../utils/resource";

const Home = () => {
  const [state, setState] = useState<any>([]);
  const [load, setLoad] = useState<any>(false);
  const [seoData, setSeoData] = useState<any>([]);
  console.log(process.env.NEXT_PUBLIC_API_URL)
  async function fetchData() {
    const data = {
      query: `
        query{
            pageHome{
              data{
               attributes{
                ${seo}
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
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
      .then((response) => {
        // console.log(response.data.data.pageHome?.data.attributes.components[1]);
        if (response?.status === 200) {
          setLoad(true);
          setState([
            ...response.data.data.pageHome?.data.attributes.components,
          ]);
          setSeoData([...response.data.data.pageHome?.data.attributes.seo]);
        }
      })
      .catch((err) => console.log(err));
    // return response.data.data;
  }
  useEffect(() => {
    !load && fetchData();
  }, [load]);

  const [font, theme] = ConfigData();
  return (
    <div className={theme}>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css?family={font}
          :wght@400;700&display=swap');
        </style>
        {load && Object.keys(seoData).length > 0 && (
          <>
            <div>hello</div>
            <title>{seoData.title}</title>
            {seoData.meta.length > 0 &&
              seoData.meta.map(({ type, type_value, content }: any) =>
                type === "name" ? (
                  <meta key={type} name={type_value} content={content} />
                ) : (
                  <meta key={type} property={type_value} content={content} />
                )
              )}
          </>
        )}
      </Head>
      {load ? (
        <>
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
            <div className="loading">Work In Progress</div>
          )}
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Home;
