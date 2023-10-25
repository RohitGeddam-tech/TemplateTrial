/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { About } from "./organism/About";
import Carousel from "./molecules/Carousel";
import { Team } from "./organism/Team";
import BannerCarousel from "./molecules/Carousel/BannerCarousel";
import { Banner } from "./organism/Banner";
import Card from "./organism/Card";
import { Appointment } from "./organism/Appointment";

const CommonComponent = (data: any = {}) => {
  const [open, setOpen] = useState<any>(false);
  //   console.log(data.data.image.data);
  const info = data.data;
  switch (info.__typename) {
    case "ComponentComponentAboutUsComponent":
      return (
        <About
          title={info.title}
          body={info.desciption}
          image={`https://buildercms.aashirwadlab.co.in${info.image?.data?.attributes?.url}`}
          bgColor={info.background_color}
          description_color={info.desciption_color}
          title_color={info.title_color}
          button={{
            cta_type: info.cta_type,
            cta_icon: info.cta_icon,
            cta_title: info.cta_title,
            cta_action: info.cta_action,
            cta_icon_type: info.cta_icon_type,
            cta_icon_alignment: info.cta_icon_alignment,
          }}
          subtitle={info.image_caption}
          imageAlignment={
            info.component_type === "left_to_right" ? "left" : "right"
          }
          buttonVisible={info.button !== null && info.button !== undefined}
        />
      );
    case "ComponentComponentCertificatesComponent":
      return (
        <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
            <p
              className="h4"
              style={{
                color: info.title_color,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
              }}
            >
              {info.desciption}
            </p>
            <Carousel
              slidesToShow={2.7}
              arrow={info.carousel_type === "arrows"}
              dots={info.carousel_type === "dots"}
            >
              {info.images.length > 0 &&
                info.images.map((doc: any, ind: number) => (
                  <div className="imgGallery" key={ind}>
                    <img
                      src={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
                      alt={doc.image_alt_text}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      );
    case "ComponentComponentOurTeamComponent":
      return (
        <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
            <p
              className="h4"
              style={{
                color: info.title_color,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
              }}
            >
              {info.desciption}
            </p>
            <Team
              data={info.cards}
              teams={info.cards?.length}
              view={"grid"}
              description_color={info.desciption_color}
              title_color={info.title_color}
            />
          </div>
        </div>
      );
    case "ComponentComponentBannerComponent":
      return (
        <>
          {info.banners?.length > 1 ? (
            <>
              <BannerCarousel slidesToShow={1} arrow={true} dots={true}>
                {info.banners.map((doc: any, ind: number) => (
                  <Banner
                    title={doc.title}
                    body={doc.body}
                    textAlign={doc.content_alignment}
                    key={ind}
                    image={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
                    bgColor={doc.bgColor}
                    description_color={doc.desciption_color}
                    title_color={doc.title_color}
                    alignment={doc.content_alignment}
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
              {info.banners.map((doc: any, ind: number) => (
                <Banner
                  title={doc.title}
                  body={doc.body}
                  textAlign={doc.content_alignment}
                  alignment={doc.content_alignment}
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
        </>
      );
    case "ComponentComponentOurServicesComponent":
      return (
        <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
            <p
              className="h4"
              style={{
                color: info.title_color,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
              }}
            >
              {info.desciption}
            </p>
            <Carousel
              slidesToShow={2.7}
              arrow={info.carousel_type === "arrows"}
              dots={info.carousel_type === "dots"}
            >
              {info.cards.length > 0 &&
                info.cards.map((doc: any, ind: number) => (
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
                      para={doc.desciption}
                      subtitle={doc.subtitle}
                      description_color={info.desciption_color}
                      title_color={info.title_color}
                      setOpen={setOpen}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
          {open && <Appointment setOpen={setOpen} />}
        </div>
      );
    case "ComponentComponentTestimonialsComponent":
      return (
        <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
            <p
              className="h4"
              style={{
                color: info.title_color,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
              }}
            >
              {info.desciption}
            </p>
            <Carousel
              slidesToShow={2.7}
              arrow={info.carousel_type === "arrows"}
              dots={info.carousel_type === "dots"}
            >
              {info.cards.length > 0 &&
                info.cards.map((doc: any, ind: number) => (
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
                      para={doc.desciption}
                      subtitle={doc.subtitle}
                      description_color={info.desciption_color}
                      title_color={info.title_color}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default CommonComponent;
