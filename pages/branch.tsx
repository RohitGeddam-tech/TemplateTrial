/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import axios from "axios";
import { Footer } from "../Components/organism/Footer";
import { apiQuery } from "../utils/apiQuery";
import CommonComponent from "../Components/CommonComponent";

const Theme1 = () => {
  const [state, setState] = useState<any>([]);

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
    // console.log(response.data.data.pageBranch?.data.attributes.components);
    // return response.data.data;
    setState([...response.data.data.pageBranch?.data.attributes.components]);
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
