/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/organism/Navbar";
import BannerCarousel from "../Components/molecules/Carousel/BannerCarousel";
import { Banner } from "../Components/organism/Banner";
import { TitleCard } from "../Components/organism/TitleCard";
// import { cardData } from ".";
import { Contact } from "../Components/organism/Contact";
import { Footer } from "../Components/organism/Footer";
import axios from "axios";
import Carousel from "../Components/molecules/Carousel";
import Card from "../Components/organism/Card";

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
          query{
              pageHome{
                data{
                 attributes{
                   components{
                     __typename
                     ...on ComponentComponentBannerComponent{
                        banners{
                          title,
                          image{
                            data{
                              attributes{
                                url,
                                alternativeText
                              }
                            }
                          },
                          body,
                          description_color,
                          title_color,
                          cta_type,
                          cta_icon,
                          cta_title,
                          cta_action,
                          cta_icon_type,
                          cta_icon_alignment,
                          content_alignment,
                          background_color,
                          image_alt_text,
                          mobile_image{
                            data{
                              attributes{
                                url
                              }
                            }
                          }
                        }
                      },
                      ...on ComponentComponentOurServicesComponent{
                        description,
                        description_color,
                        title,
                        title_color,
                        background_color,
                        carousel_type,
                        cards{
                          title,
                          subtitle,
                          description,
                          card_type,
                          cta_type,
                          cta_title,
                          cta_action,
                          image{
                            data{
                              attributes{
                                url,
                                alternativeText
                              }
                            }
                          }
                        }
                      },
                      ...on ComponentComponentTestimonialsComponent{
                        description,
                        description_color,
                        title,
                        title_color,
                        background_color,
                        cards{
                          title,
                          subtitle,
                          description,
                          card_type,
                          cta_type,
                          cta_title,
                          cta_action,
                          image{
                            data{
                              attributes{
                                url,
                                alternativeText
                              }
                            }
                          }
                        },
                        type_caroursel:carousel_type
                      }
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
      console.log(response.data.data.pageHome?.data.attributes.components[1]);
      // return response.data.data;
      setState([...response.data.data.pageHome?.data.attributes.components]);
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
      <Navbar />
      {state.length !== 0 ? (
        <>
          <div style={{ marginTop: "81px" }}>
            {state[0].banners?.length > 1 ? (
              <>
                <BannerCarousel slidesToShow={1} arrow={true} dots={true}>
                  {state[0].banners.map((doc: any, ind: number) => (
                    <Banner
                      title={doc.title}
                      body={doc.body}
                      textAlign={doc.content_alignment}
                      key={ind}
                      image={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
                      bgColor={doc.bgColor}
                      description_color={doc.description_color}
                      title_color={doc.title_color}
                      button={{
                        cta_type: doc.cta_type,
                        cta_icon: doc.cta_icon,
                        cta_title: doc.cta_title,
                        cta_action: doc.cta_action,
                        cta_icon_type: doc.cta_icon_type,
                        cta_icon_alignment: doc.cta_icon_alignment,
                      }}
                    />
                  ))}
                </BannerCarousel>
              </>
            ) : (
              <>
                {state[0].banners.map((doc: any, ind: number) => (
                  <Banner
                    title={doc.title}
                    body={doc.body}
                    textAlign={doc.content_alignment}
                    key={ind}
                    image={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
                    bgColor={doc.bgColor}
                    description_color={doc.description_color}
                    title_color={doc.title_color}
                    button={{
                      cta_type: doc.cta_type,
                      cta_icon: doc.cta_icon,
                      cta_title: doc.cta_title,
                      cta_action: doc.cta_action,
                      cta_icon_type: doc.cta_icon_type,
                      cta_icon_alignment: doc.cta_icon_alignment,
                    }}
                  />
                ))}
              </>
            )}
            {/* <Banner
              opacity="no"
              alignment="left"
              bgColor="--primary-lightest"
            /> */}
          </div>
          <div
            className={`titleCard`}
            style={
              state[1].bgColor
                ? { backgroundColor: state[1].bgColor }
                : { backgroundColor: `white` }
            }
          >
            <div className="container">
              <p
                className="h4"
                style={{
                  color: state[1].title_color,
                }}
              >
                {state[1].title}
              </p>
              <p
                className="para-md"
                style={{
                  color: state[1].description_color,
                }}
              >
                {state[1].description}
              </p>
              <Carousel
                slidesToShow={2.7}
                arrow={state[1].carousel_type === "arrows"}
                dots={state[1].carousel_type === "dots"}
              >
                {state[1].cards.length > 0 &&
                  state[1].cards.map((doc: any, ind: number) => (
                    <div key={ind}>
                      <Card
                        cardType={"default"}
                        button={{
                          cta_type: doc.cta_type,
                          cta_icon: doc.cta_icon,
                          cta_title: doc.cta_title,
                          cta_action: doc.cta_action,
                          cta_icon_type: doc.cta_icon_type,
                          cta_icon_alignment: doc.cta_icon_alignment,
                        }}
                        image={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
                        title={doc.title}
                        para={doc.description}
                        subtitle={doc.subtitle}
                        description_color={state[1].description_color}
                        title_color={state[1].title_color}
                      />
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
          <div
            className={`titleCard`}
            style={
              state[2].bgColor
                ? { backgroundColor: state[2].bgColor }
                : { backgroundColor: `white` }
            }
          >
            <div className="container">
              <p
                className="h4"
                style={{
                  color: state[2].title_color,
                }}
              >
                {state[2].title}
              </p>
              <p
                className="para-md"
                style={{
                  color: state[2].description_color,
                }}
              >
                {state[2].description}
              </p>
              <Carousel
                slidesToShow={2.7}
                arrow={state[2].carousel_type === "arrows"}
                dots={state[2].carousel_type === "dots"}
              >
                {state[2].cards.length > 0 &&
                  state[2].cards.map((doc: any, ind: number) => (
                    <div key={ind}>
                      <Card
                        cardType={"testimonial"}
                        button={{
                          cta_type: doc.cta_type,
                          cta_icon: doc.cta_icon,
                          cta_title: doc.cta_title,
                          cta_action: doc.cta_action,
                          cta_icon_type: doc.cta_icon_type,
                          cta_icon_alignment: doc.cta_icon_alignment,
                        }}
                        image={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
                        title={doc.title}
                        para={doc.description}
                        subtitle={doc.subtitle}
                        description_color={state[2].description_color}
                        title_color={state[2].title_color}
                      />
                    </div>
                  ))}
              </Carousel>
            </div>
          </div>
          {/* <TitleCard
            carousel={true}
            carouselProps={{
              slidesToShow: 2.7,
              arrow: state[1].carousel_type === "arrows",
              dots: state[1].carousel_type === "dots",
              children: [],
            }}
            data={state[1].cards}
            cardType="default"
            // view="grid"
            title={state[1].title}
            body={state[1].description}
            description_color={state[1].description_color}
            title_color={state[1].title_color}
          /> */}
          <Contact
            inputBox={inputBox}
            // details={details}
            formAlignment="right"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
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
