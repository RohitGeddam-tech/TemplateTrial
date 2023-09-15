import React from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";

interface aboutProps {
  image?: string;
  imageAlignment?: "left" | "right";
  button?: ButtonProps;
  buttonVisible?: boolean;
  subtitle?: string;
  subtitleVisible?: boolean;
  title?: string;
  body?: string;
}

export const About = ({
  button = { label: "button", Type: "primary", size: "small" },
  image = "https://staging.sugarlogger.com/static/media/Logo.652fce25.svg",
  subtitleVisible = true,
  subtitle = "subtitle",
  title = "title",
  body = "body",
  buttonVisible = true,
  imageAlignment = "left",
}: aboutProps) => {
  const AboutImage = () => (
    <div className="imgBox">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt="logo"
        // onClick={() => (window.location.href = "/")}
      />
      {subtitleVisible && <p className="caption">{subtitle}</p>}
    </div>
  );

  const AboutDetails = () => (
    <div className="details">
      <p className="h4">{title}</p>
      <p className="para-md">{body}</p>
      {buttonVisible && <Button {...button} />}
    </div>
  );

  return (
    <div className={`about`}>
      <div className="container">
        <div
          className="left"
          style={{ width: imageAlignment === "left" ? "35%" : "65%" }}
        >
          {imageAlignment === "left" ? <AboutImage /> : <AboutDetails />}
        </div>
        <div
          className="right"
          style={{ width: imageAlignment === "right" ? "35%" : "65%" }}
        >
          {imageAlignment === "right" ? <AboutImage /> : <AboutDetails />}
        </div>
      </div>
    </div>
  );
};
