/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import { Footer } from "../Components/organism/Footer";
import axios from "axios";
import { apiQuery } from "../utils/apiQuery";
import CommonComponent from "../Components/CommonComponent";

const Home = () => {
  const [state, setState] = useState<any>([]);
  async function fetchData() {
    const data = {
      query: `
        query{
            pageHome{
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
    await axios
      .post("https://buildercms.aashirwadlab.co.in/graphql", data)
      .then((response) => {
        // console.log(response.data.data.pageHome?.data.attributes.components[1]);
        setState([...response.data.data.pageHome?.data.attributes.components]);
      })
      .catch((err) => console.log(err));
    // return response.data.data;
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
      {state.length !== 0 ? (
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

export default Home;
