/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "../molecules/Button/Button";
import { ButtonProps } from "../molecules/Button/Util";
import { Appointment } from "./Appointment";

interface testimonialProps {
  details: "top" | "bottom";
  imageType: "default" | "circle";
}

export interface cardProps {
  description?: string | undefined;
  image?: any;
  title?: string;
  para?: string;
  subtitle?: string;
  button?: ButtonProps;
  cardType?: "default" | "images" | "testimonial" | "feature" | "team";
  testimonial?: testimonialProps;
  description_color?: string;
  title_color?: string;
  setOpen?: any;
  sub_title?:string;
  font_size_title_feat?:string;
  font_type_title_feat?:"default"| "italic"|"bold";
  font_weight_title_feat?: string;
  font_size_desc_feat?:string;
  font_type_desc_feat?:"default"| "italic"|"bold";
  font_weight_desc_feat?: string;
  font_size_title_card?:string;
  font_type_title_card?:"default"| "italic"|"bold";
  font_weight_title_card?: string;
  font_size_desc_card?:string;
  font_type_desc_card?:"default"| "italic"|"bold";
  font_weight_desc_card?: string;
  card_size?:"large" | "small";
}

const Card = ({
  cardType,
  title = "",
  font_size_title_card= "36",
  font_type_title_card= "bold",
  font_weight_title_card=  "600",
  font_size_desc_card="14",
  font_type_desc_card="default",
  font_weight_desc_card="300",
  para = "",
  button,
  subtitle = "",
  image = "",
  card_size="large",
  testimonial = { details: "top", imageType: "circle" },
  description_color = "#212b36",
  title_color = "#212b36",
  setOpen,
}: cardProps) => {
  
  return cardType === "testimonial" ? (
   (image || title || subtitle || para) ? <div
      className={`testimonialCard ${testimonial.details} ${testimonial.imageType} ${card_size}`}
    >
    { ( image || title  || subtitle)? <div className="details">
        {image && <img src={image} alt="titleImg" />}
        <div className="info">
          {title && (
            <p
              className="para-md"
              style={{ color: title_color,fontWeight: font_weight_title_card, fontStyle:font_type_title_card,fontSize:font_size_title_card }}
            >
              {title}
            </p>
          )}
          {subtitle && (
            <p className="para-md" style={{ color: description_color,}}>
              {subtitle}
            </p>
          )}
        </div>
      </div> : null}
      {para && (
        <p className="para-lg" style={{ color: description_color, fontWeight :font_weight_desc_card,fontStyle:font_type_desc_card,fontSize:font_size_desc_card  }}>
          {para}
        </p>
      )}
    </div> : null
  ) : cardType === "images" ? (
    image && (
      <div className="imgGallery">
        <img src={image} alt="titleImg" />
      </div>
    )
  ) : (
    (image || title || subtitle || para || button) ?  <div className={`card ${card_size}`}>
      {image && <img src={image} alt="titleImg" />}
      {title && (
        <p className="sub-md" style={{ color: title_color ,fontWeight: font_weight_title_card, fontStyle:font_type_title_card,fontSize:font_size_title_card}}>
          {title}
        </p>
      )}
      {subtitle && (
        <p className="para-lg" style={{ color: description_color }}>
          {subtitle}
        </p>
      )}
      {para && (
        <p className="para-sm" style={{ color: description_color,fontWeight :font_weight_desc_card,fontStyle:font_type_desc_card,fontSize:font_size_desc_card }}>
          {para}
        </p>
      )}
      {button && (
        <Button
          {...button}
          handleClick={() => {
            setOpen(true);
          }}
        />
      )}
    </div> : null
  );
};

export default Card;
