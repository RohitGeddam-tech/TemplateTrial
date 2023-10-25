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
  image?: string;
  title?: string;
  para?: string;
  subtitle?: string;
  button?: ButtonProps;
  cardType?: "default" | "images" | "testimonial" | "feature" | "team";
  testimonial?: testimonialProps;
  description_color?: string;
  title_color?: string;
}

const Card = ({
  cardType,
  title = "Title",
  para = "Description",
  button,
  subtitle = "subtitle",
  image = "https://start.sugarlogger.com/static/media/Main-Banner.be4fadf0.jpg",
  testimonial = { details: "top", imageType: "circle" },
  description_color = "#212b36",
  title_color = "#212b36",
}: cardProps) => {
  const [open,setOpen]=useState<any>(false);
  return (
    <>
      {cardType === "testimonial" ? (
        <div
          className={`testimonialCard ${testimonial.details} ${testimonial.imageType}`}
        >
          <div className="details">
            <img src={image} alt="titleImg" />
            <div className="info">
              <p
                className="para-md"
                style={{ fontWeight: "600", color: title_color }}
              >
                {title}
              </p>
              <p className="para-md" style={{ color: description_color }}>
                {subtitle}
              </p>
            </div>
          </div>
          <p className="para-lg" style={{ color: description_color }}>
            {para}
          </p>
        </div>
      ) : cardType === "images" ? (
        <div className="imgGallery">
          <img src={image} alt="titleImg" />
        </div>
      ) : (
        <div className="card">
          <img src={image} alt="titleImg" />
          <p
            className="sub-md"
            style={{ fontWeight: "600", color: title_color }}
          >
            {title}
          </p>
          <p className="para-lg" style={{ color: description_color }}>
            {subtitle}
          </p>
          <p className="para-sm" style={{ color: description_color }}>
            {para}
          </p>
          <Button {...button}
              handleClick={() => {
                setOpen(true);
              }} />
        </div>
      )}
      {open && <Appointment setOpen={setOpen} />}
    </>
  );
};

export default Card;
