import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import axios from "axios";
import { Footer } from "../Components/organism/Footer";
import { apiQuery, seo } from "../utils/apiQuery";
import { ConfigData } from "../utils/resource";
import CommonComponent from "../Components/CommonComponent";
import Link from "next/link";
import WhatsAppButton from "../Components/organism/WhatsApp";

import type { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = {
    query: `
    query{
      navbar{
        data{
          attributes{
            menus{
              title,
              url
            },
            url,
            button{
              title,
              cta_action,
              type,
              icon_type,
              icon
            },
            logo{
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      },
    }
    `,
  };
  const response = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
    .then((res) => {
      return res;
    });
  // const filteredMap = response.data.data.navbar.data.attributes.menus?.
  const filteredMap = response.data.data.navbar.data.attributes.menus?.filter(
    (doc: any) => doc.url !== "/"
  );
  const paths = filteredMap?.map(
    (menu: any) => ({
      params: { slug: menu.url.replace("/", "") },
    })
  );

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps({ params }: any) {
  // console.log(params.slug, "trial");
  const data = {
    query: `
    query{
      pages(filters: { slug: {eq:"${params.slug}"}} ){
          data {
            attributes {
              ${seo}
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const repo = await res.json();

  return { props: { repo } };
}

type Props = { repo: any };

export default function Page({ repo }: Props) {
  // console.log(repo);

  const router = useRouter();
  //   console.log(router.query.slug);
  const [state, setState] = useState<any>([]);
  const [load, setLoad] = useState<any>(false);
  const [seoData, setSeoData] = useState<any>({});
  // const [slugName, setSlugName] = useState<any>("");

  async function fetchData(pageName: any) {
    const data = {
      query: `
      query{
        pages(filters: { slug: {eq:"${pageName}"}} ){
            data {
              attributes {
                ${seo}
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
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
      .then((response) => {
        // console.log(response.data.data, pageName);
        if (response?.status === 200) {
          setLoad(true);
          setState([
            ...response.data.data.pages?.data[0].attributes.components,
          ]);
          setSeoData({
            ...response.data.data.pages?.data[0].attributes.seo,
          });
        }
      })
      .catch((err) => {
        console.log(err, "error");
        setLoad(true);
      });
  }

  useEffect(() => {
    if (router.isReady) {
      const slug: any = router.query?.slug;

      // const words = slug?.split("-");

      // for (let i = 0; i < words.length; i++) {
      //   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      // }
      // const pageName = `page${words.join("")}`;
      !load && slug && fetchData(slug);
      router.events.on("routeChangeComplete", () => router.reload());
      return router.events.off("routeChangeComplete", () => router.reload());
    }
  }, [load, router]);

  // useEffect(() => {
  //   console.log(repo);

  //   if (
  //     repo !== null &&
  //     repo !== undefined &&
  //     Object.keys(repo).length > 0 &&
  //     !load
  //   ) {
  //     setState([...repo.data.pages?.data[0].attributes.components]);
  //     setSeoData({
  //       ...repo.data.pages?.data[0].attributes.seo,
  //     });
  //     setLoad(true);
  //   }
  // }, [load, repo]);

  //   useEffect(() => {
  //     !load && slugName !== "" && fetchData(slugName);
  //   }, [load, slugName]);

  const [font, theme, number] = ConfigData();

  return (
    <div className={theme}>
      <Head>
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
              {number && <WhatsAppButton data={number} />}
              <Footer />
            </>
          ) : (
            <div className="loading">
              <p className="h3">Work In Progress</p>
              <Link href="/" className="h5" style={{ color: "blue" }}>
                Click here to go back
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}
