/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../molecules/Button/Button";
import { ButtonProps } from "../molecules/Button/Util";

interface testimonialProps {
  details: "top" | "bottom";
  imageType: "default" | "circle";
}

export interface cardProps {
  image: string;
  title?: string;
  para?: string;
  subtitle?: string;
  button?: ButtonProps;
  cardType?: "default" | "images" | "testimonial" | "feature";
  testimonial?: testimonialProps;
}

const Card = ({
  cardType,
  title = "Title",
  para = "Description",
  button,
  subtitle = "subtitle",
  image = "https://start.sugarlogger.com/static/media/Main-Banner.be4fadf0.jpg",
  testimonial = { details: "top", imageType: "circle" },
}: cardProps) => {
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
                style={{ fontWeight: "600", color: "var(--grayscale-main)" }}
              >
                {title}
              </p>
              <p className="para-md">{subtitle}</p>
            </div>
          </div>
          <p className="para-lg">{para}</p>
        </div>
      ) : cardType === "images" ? (
        <div className="imgGallery">
          <img src={image} alt="titleImg" />
        </div>
      ) : (
        <div className="card">
          <img src={image} alt="titleImg" />
          <p className="sub-md" style={{ fontWeight: "600" }}>
            {title}
          </p>
          <p className="para-lg">{subtitle}</p>
          <p className="para-sm">{para}</p>
          <Button {...button} />
        </div>
      )}
    </>
  );
};

export default Card;
