/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { About } from "./organism/About";
import Carousel from "./molecules/Carousel";
import { Team } from "./organism/Team";
import BannerCarousel from "./molecules/Carousel/BannerCarousel";
import { Banner } from "./organism/Banner";
import Card from "./organism/Card";
import { Appointment } from "./organism/Appointment";
import { Contact } from "./organism/Contact";
import { Feature } from "./organism/Feature";

const CommonComponent = (data: any = {}) => {
  const [open, setOpen] = useState<any>(false);
  const info = data.data;
  switch (info?.__typename) {    

    case "ComponentComponentAboutUsComponent":
      return (
        <About
          title={info.title}
          body={info.desciption}
          image={info.image?.data?.attributes?.url !== undefined ?`${process.env.NEXT_PUBLIC_API_URL}${info.image?.data?.attributes?.url}`: ""}
        
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
                textAlign: info.galleryAlignment,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
                textAlign: info.galleryAlignment,
              }}
            >
              {info.desciption}
            </p>
            <Carousel
              slidesToShow={3}
              arrow={info.carousel_type === "arrows"}
              dots={info.carousel_type === "dots"}
            >
              {info.images.length > 0 &&
                info.images.map((doc: any, ind: number) => (
                  <div className="imgGallery" key={ind}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`}
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
                textAlign: info.teamAlignment,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
                textAlign: info.teamAlignment,
              }}
            >
              {info.desciption}
            </p>
            <Team
              data={info.cards}
              teams={info.cards?.length}
              view={info.view === "grid_view" ? "grid" : "line"}
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
                    image={
                      doc.image?.data?.attributes?.url
                        ? `${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`
                        : ""
                    }
                    mobImage={
                      doc.mobile_image?.data?.attributes?.url
                        ? `${process.env.NEXT_PUBLIC_API_URL}${doc.mobile_image?.data?.attributes?.url}`
                        : ""
                    }
                    bgColor={doc.bgColor}
                    description_color={doc.desciption_color}
                    title_color={doc.title_color}
                    alignment={doc.content_alignment}
                    opacity={doc.image_opacity}
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
                  opacity={doc.image_opacity}
                  key={ind}
                  image={
                    doc.image?.data?.attributes?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`
                      : ""
                  }
                  mobImage={
                    doc.mobile_image?.data?.attributes?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${doc.mobile_image?.data?.attributes?.url}`
                      : ""
                  }
                  bgColor={doc.bgColor}
                  description_color={doc.desciption_color}
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
                textAlign: info.serviceAlignment,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
                textAlign: info.serviceAlignment,
              }}
            >
              {info.desciption}
            </p>
            <Carousel
              slidesToShow={3}
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
                      image={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`}
                      title={doc.title}
                      para={
                        doc.desciption?.length > 240
                          ? `${doc.desciption?.slice(0, 240)}...`
                          : doc.desciption
                      }
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
                textAlign: info.testAlignment,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.desciption_color,
                textAlign: info.testAlignment,
              }}
            >
              {info.desciption}
            </p>
            <Carousel
              slidesToShow={3}
              arrow={info.type_caroursel === "arrows"}
              dots={info.type_caroursel === "dots"}
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
                      image={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`}
                      title={doc.title}
                      para={
                        doc.desciption?.length > 240
                          ? `${doc.desciption?.slice(0, 240)}...`
                          : doc.desciption
                      }
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
    case "ComponentComponentContactUsComponenet":
      return (
        <Contact
          description_color={info.desciption_color}
          title_color={info.title_color}
          title={info.title}
          body={info.desciption}
          details={info.contact_details}
          bgColor={info.background_color}
          formAlignment={info.component_alignment}
        />
      );
    case "ComponentComponentFeatureComponent":
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
                textAlign: info.featureAlignment,
              }}
            >
              {info.title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.description_color,
                textAlign: info.featureAlignment,
              }}
            >
              {info.description}
            </p>
            <Feature
              data={info.cards}
              features={info.cards?.length}
              alignment={info.content_alignment}
              description_color={info.description_color}
              title_color={info.title_color}
            />
          </div>
        </div>
      );
    case "ComponentComponentPrivacyPolicy":
      return (
        <div
          className={`titleCard policy`}
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
                textAlign: "center",
              }}
            >
              {info.Title}
            </p>
            <p
              className="para-md"
              style={{
                color: info.description_color,
              }}
            >
              {info.Description}
            </p>
            {info.DescriptionTitle?.map((doc: any, i: number) => (
              <div key={i} className="policyDetail">
                <p className="sub-lg">{doc.Title}</p>
                <p className="para-md">{doc.Description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default CommonComponent;
