import React from "react";
import { Button } from "../molecules/Button/Button";
import Image from "next/image";

interface bannerProps {
  firstButton?: "primary" | "secondary" | "tertiary" | "danger";
  secondButton?: "primary" | "secondary" | "tertiary" | "danger";
  title?: string;
  body?: string;
  alignment?: "left" | "right" | "center";
  opacity?: "partial" | "full" | "no";
  image?: string;
}

export const Banner = ({
  firstButton = "tertiary",
  secondButton = "primary",
  title = "TITLE",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image = "https://start.sugarlogger.com/static/media/Main-Banner.be4fadf0.jpg",
  alignment = "right",
  opacity = "partial",
}: bannerProps) => {
  const buttona =
    firstButton === "tertiary"
      ? "ghost"
      : firstButton === "secondary"
      ? "tertiary"
      : firstButton;

  const buttonb =
    secondButton === "tertiary"
      ? "ghost"
      : secondButton === "secondary"
      ? "tertiary"
      : secondButton;

  const bannerStyle =
    opacity !== "no"
      ? { backgroundImage: `url(${image})` }
      : { background: `var(--secondary-lightest, #b0e0fa)` };

  return (
    <div className={`banner ${opacity} ${alignment}`}>
      {opacity !== "no" && (
        <div className="bgImg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="background" />
        </div>
      )}
      <div className="container">
        <div className="box">
          <div className="details">
            <p className="h2">{title}</p>
            <p className="para-lg">{body}</p>
          </div>
          <div className="content">
            <Button Type={buttona} label={firstButton} size="small" />
            <Button Type={buttonb} label={secondButton} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
