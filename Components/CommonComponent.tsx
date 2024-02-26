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

   
      
      return ((info.title || info.desciption || info.image?.data?.attributes?.url || info.image_caption)?  <About
          title={info.title}
          body={info.desciption}
          image={info.image?.data?.attributes?.url !== undefined ?`${process.env.NEXT_PUBLIC_API_URL}${info.image?.data?.attributes?.url}`: ""}
        
          bgColor={info.background_color}
          description_color={info.desciption_color}
          title_color={info.title_color}
          font_size_title_about= {info.about_title_font_size}
          font_type_title_about= {info.about_title_font_type}
          font_weight_title_about=  {info.about_title_font_weight}
          font_size_desc_about={info.about_description_font_size}
          font_type_desc_about={info.about_description_font_type}
          font_weight_desc_about= {info.about_description_font_weight}
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
        />:null
      );
    case "ComponentComponentCertificatesComponent":

      return (
        (info.title ||  info.desciption  || info.images )?
        <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
           {info.title &&
             <p
             className="h4"
             style={{
               color: info.title_color,
               textAlign: info.galleryAlignment,
               fontSize:info.certi_title_font_size,
              fontWeight:info.certi_title_font_weight,
              fontStyle:info.certi_title_font_type
             }}
           >
             {info.title}
           </p>
           }
           {info.desciption  &&
             <p
             className="para-md"
             style={{
               color: info.desciption_color,
               textAlign: info.galleryAlignment,
               fontSize:info.certi_description_font_size,
               fontWeight:info.certi_description_font_weight,
               fontStyle:info.certi_description_font_type
             }}
           >
             {info.desciption}
           </p>
           }
           {
            info.images?.length &&  <Carousel
            slidesToShow={3}
            arrow={info?.certi_carousel === "arrows"}
            dots={info?.certi_carousel === "dots"}
          >
            {info?.images?.length > 0 &&
              info.images.map((doc: any, ind: number) => (
               (doc.image?.data?.attributes?.url) ?<div className="imgGallery" key={ind}>
                  <img
                    src={
                      doc.image?.data?.attributes?.url !== undefined
                        ? `${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`
                        : ""
                    }
                 alt={doc.image_alt_text}
                  />
                </div>:null
              ))}
          </Carousel>
           }
          </div>
        </div>
        :null
      );
    case "ComponentComponentOurTeamComponent":
      return (  (info.title || info.desciption || info.cards?.length > 0)?    <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
          {info.title &&   <p
              className="h4"
              style={{ 
                color: info.title_color,
                textAlign: info.teamAlignment,
              }}
            >
              {info.title}
            </p>}
           {
            info.desciption &&  <p
            className="para-md"
            style={{
              color: info.desciption_color,
              textAlign: info.teamAlignment,
            }}
          >
            {info.desciption}
          </p>
           }
            {
             info.cards?.length > 0 &&
              <Team
              data={info.cards}
              teams={info.cards?.length}
              view={info.view === "grid_view" ? "grid" : "line"}
              description_color={info.desciption_color}
              title_color={info.title_color}
            />
            }
          </div>
        </div> :  null
      );
    case "ComponentComponentBannerComponent": 
      return ((info.banners?.length > 1 )? 
        <BannerCarousel slidesToShow={1}
         arrow={true}
          dots={true}>
        {info.banners.map((doc: any, ind: number) => (
        (doc.title || doc.body || doc.image?.data?.attributes?.url ||  doc.mobile_image?.data?.attributes?.url ) ? <Banner
            title={doc.title}
            title_font_size={doc.title_font_size}
            title_font_type={doc.title_font_type}
            title_font_weight={doc.title_font_weight}
            body={doc.body}
            textAlign={doc.content_alignment}
            key={ind}
            image={
              doc.image?.data?.attributes?.url !==undefined
                ? `${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`
                : ""
            }
            mobImage={
              doc.mobile_image?.data?.attributes?.url !== undefined
                ? `${process.env.NEXT_PUBLIC_API_URL}${doc.mobile_image?.data?.attributes?.url}`
                : ""
            }
            bgColor={doc.bgColor}
            description_color={doc.desciption_color}
            title_color={doc.title_color}
            alignment={doc.content_alignment}
            opacity={doc.image_opacity}
            content_box_opacity={doc.content_box_opacity}
            content_position={doc.content_position}
            button={{
              cta_type: doc.cta_type,
              cta_icon: doc.cta_icon,
              cta_title: doc.cta_title,
              cta_action: doc.cta_action,
              cta_icon_type: doc.cta_icon_type,
              cta_icon_alignment: doc.cta_icon_alignment,
            }}
          /> : null
        ))}
      </BannerCarousel>
        :  info.banners && info.banners.map((doc: any, ind: number) => (
         (doc.title || doc.body || doc.image?.data?.attributes?.url ||  doc.mobile_image?.data?.attributes?.url ) ? <Banner
            title={doc.title}
            title_font_size={doc.title_font_size}
            title_font_type={doc.title_font_type}
            title_font_weight={doc.title_font_weight}
            body={doc.body}
            textAlign={doc.content_alignment}
            alignment={doc.content_alignment}
            opacity={doc.image_opacity}
            key={ind}
            image={
              doc.image?.data?.attributes?.url !== undefined
                ? `${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`
                : ""
            }
            mobImage={
              doc.mobile_image?.data?.attributes?.url !==undefined
                ? `${process.env.NEXT_PUBLIC_API_URL}${doc.mobile_image?.data?.attributes?.url}`
                : ""
            }
            bgColor={doc.bgColor}
            description_color={doc.desciption_color}
            title_color={doc.title_color}
            content_box_opacity={doc.content_box_opacity}
            content_position={doc.content_position}
            button={{
              cta_type: doc.cta_type,
              cta_icon: doc.cta_icon,
              cta_title: doc.cta_title,
              cta_action: doc.cta_action,
              cta_icon_type: doc.cta_icon_type,
              cta_icon_alignment: doc.cta_icon_alignment,
            }}
          /> : null
        ))
      );
      case "ComponentComponentOurServicesComponent":
    
        return ((info.title || info.desciption || info.cards?.length > 0)? <div
            className={`titleCard`}
            style={
              info.background_color
                ? { backgroundColor: info.background_color }
                : { backgroundColor: `white` }
            }
          >
            <div className="container">
             { info.title &&  <p
                className="h4"
                style={{
                  color: info.title_color,
                  textAlign: info.serviceAlignment,
                }}
              >
                {info.title}
              </p>}
          { info.desciption &&   <p
                className="para-md"
                style={{
                  color: info.desciption_color,
                  textAlign: info.serviceAlignment,
                }}
              >
                {info.desciption}
              </p>}
             {info.cards?.length > 0 && 
               <Carousel
               slidesToShow={3}
               arrow={info.carousel_type === "arrows"}
               dots={info.carousel_type === "dots"}
             >
               {info.cards?.length > 0 &&
                 info.cards.map((doc: any, ind: number) => (
                  (doc.title || doc.image?.data?.attributes?.url || doc.cta_title || doc.desciption || doc.subtitle)?<div key={ind}>
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
                      image={doc.image?.data?.attributes?.url!== undefined ? `${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`: ""}
                      title={doc.title}
                      font_size_title_card={doc.font_size_title_card}
                      font_type_title_card= {doc.font_type_title_card}
                      font_weight_title_card= {doc.font_weight_title_card}
                      font_size_desc_card={doc.font_size_desc_card}
                      font_type_desc_card={doc.font_type_desc_card}
                      font_weight_desc_card={doc.font_weight_desc_card}
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
                   </div> : null
                 ))}
             </Carousel>
             }
            </div>
            {open && <Appointment setOpen={setOpen} />}
          </div> : null
        );

    case "ComponentComponentTestimonialsComponent":
      console.log(info);
      
      return ((info.cards?.length > 0  || info.title || info.desciption ) ? <div
    className={`titleCard`}
    style={
      info.background_color
        ? { backgroundColor: info.background_color }
        : { backgroundColor: `white` }
    }
  >
    <div className="container">
      {
        info.title && <p
        className="h4"
        style={{
          color: info.title_color,
          textAlign: info.testAlignment,
        }}
      >
        {info.title}
      </p>
      }
      {
        info.desciption && <p
        className="para-md"
        style={{
          color: info.desciption_color,
          textAlign: info.testAlignment,
        }}
      >
        {info.desciption}
      </p>
      }
     {
      (info.cards?.length > 0) ?
      <Carousel
      slidesToShow={3}
      arrow={info.type_caroursel === "arrows"}
      dots={info.type_caroursel === "dots"}
    >
      {info.cards?.length > 0 &&
        info.cards.map((doc: any, ind: number) => (
          (doc?.title || doc?.image?.data?.attributes?.url || doc?.cta_title || doc?.desciption || doc?.subtitle)?<div key={ind}>
           <Card
              cardType={"testimonial"}
              card_size={info.testi_card_type}
              button={{
                cta_type: doc.cta_type,
                cta_icon: doc.cta_icon,
                cta_title: doc.cta_title,
                cta_action: doc.cta_action,
                cta_icon_type: doc.cta_icon_type,
                cta_icon_alignment: doc.cta_icon_alignment,
              }}
              image={doc.image?.data?.attributes?.url !== undefined ?`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`: ""}
              title={doc.title}
              font_size_title_card={doc.testi_title_font_size}
              font_type_title_card= {doc.testi_title_font_type}
              font_weight_title_card= {doc.testi_title_font_weight}
              font_size_desc_card={doc.testi_description_font_size}
              font_type_desc_card={doc.testi_description_font_type}
              font_weight_desc_card={doc.testi_description_font_weight}
              para={
                doc.desciption?.length > 240
                  ? `${doc.desciption?.slice(0, 240)}...`
                  : doc.desciption
              }
              subtitle={doc.subtitle}
              description_color={info.desciption_color}
              title_color={info.title_color}
            />
          </div> : null
        ))}
    </Carousel>:null
     }
    </div>
  </div>: null
      );
    case "ComponentComponentContactUsComponenet":

      
      return (
       (info.title || info.desciption || info.contact_details) ?
        <Contact
        description_color={info.desciption_color}
        title_color={info.title_color}
        title={info.title}
        title_font_size={info.font_size_title}
        title_font_type={info.font_type_title}
        title_font_weight={info.font_weight_title}
        description_font_size={info.font_size_desc}
        description_font_type={info.font_type_desc}
        description_font_weight={info.font_weight_desc}
        body={info.desciption}
        details={info.contact_details}
        bgColor={info.background_color}
        formAlignment={info.component_alignment}
      />:null
      );
    case "ComponentComponentFeatureComponent":
      return ( (info.title || info.description || info.cards?.length > 0 ) ? <div
          className={`titleCard`}
          style={
            info.background_color
              ? { backgroundColor: info.background_color }
              : { backgroundColor: `white` }
          }
        >
          <div className="container">
         {info.title &&    <p
              className="h4"
              style={{
                color: info.title_color,
                textAlign: info.featureAlignment,
                fontSize:info.title_font_size,
                fontStyle:info.title_font_type,
                fontWeight:info.title_font_weight
              }}
            >
              {info.title}
            </p>}
            {info.description &&  
              <p
              className="para-md"
              style={{
                color: info.description_color,
                textAlign: info.featureAlignment,
                fontSize:info.description_font_size,
                fontStyle:info.description_font_type,
                fontWeight:info.description_font_weight,
              }}
            >
              {info.description}
            </p>
            }
           {
            info.cards?.length > 0 &&  <Feature
            data={info.cards}
            features={info.cards?.length}
            alignment={info.content_alignment}
            description_color={info.description_color}
            title_color={info.title_color}
                       />
           }
          </div>
        </div> : null
      );
    case "ComponentComponentPrivacyPolicy":
      return ((info.Title || info.Description || info.DescriptionTitle)?<div
        className={`titleCard policy`}
        style={
          info.background_color
            ? { backgroundColor: info.background_color }
            : { backgroundColor: `white` }
        }
      >
        <div className="container">
        {info.Title &&
            <p
            className="h4"
            style={{
              color: info.title_color,
              textAlign: "center",
            }}
          >
            {info.Title}
          </p>
        }
        { info.Description && <p
            className="para-md"
            style={{
              color: info.description_color,
            }}
          >
            {info.Description}
          </p>}
          {info.DescriptionTitle?.map((doc: any, i: number) => (
            <div key={i} className="policyDetail">
             { doc .Title && <p className="sub-lg">{doc.Title}</p>}
              { doc.Description &&  <p className="para-md">{doc.Description}</p> }
            </div>
          ))}
        </div>
      </div> :  null
      );
    default:
      return <></>;
  }
};

export default CommonComponent;
