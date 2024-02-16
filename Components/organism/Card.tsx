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
}

const Card = ({
  cardType,
  title = "",
  para = "",
  button,
  subtitle = "",
  image = "",
  testimonial = { details: "top", imageType: "circle" },
  description_color = "#212b36",
  title_color = "#212b36",
  setOpen,
}: cardProps) => {
  return cardType === "testimonial" ? (
   (image || title || subtitle || para) ? <div
      className={`testimonialCard ${testimonial.details} ${testimonial.imageType}`}
    >
    { ( image || title  || subtitle)? <div className="details">
        {image && <img src={image} alt="titleImg" />}
        <div className="info">
          {title && (
            <p
              className="para-md"
              style={{ fontWeight: "600", color: title_color }}
            >
              {title}
            </p>
          )}
          {subtitle && (
            <p className="para-md" style={{ color: description_color }}>
              {subtitle}
            </p>
          )}
        </div>
      </div> : null}
      {para && (
        <p className="para-lg" style={{ color: description_color }}>
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
    (image || title || subtitle || para || button) ?  <div className="card">
      {image && <img src={image} alt="titleImg" />}
      {title && (
        <p className="sub-md" style={{ fontWeight: "600", color: title_color }}>
          {title}
        </p>
      )}
      {subtitle && (
        <p className="para-lg" style={{ color: description_color }}>
          {subtitle}
        </p>
      )}
      {para && (
        <p className="para-sm" style={{ color: description_color }}>
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
