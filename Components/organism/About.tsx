import React, { useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import { Appointment } from "./Appointment";
import { useFormattedText } from "../../utils/useFormattedText";

interface aboutProps {
  image?: string;
  imageAlignment?: "left" | "right";
  button?: ButtonProps;
  buttonVisible?: boolean;
  subtitle?: string;
  subtitleVisible?: boolean;
  title?: string;
  body?: string;
  bgColor?: string;
  description_color?: string;
  title_color?: string;
  font_size_title_about?: string;
  font_type_title_about?: "default" | "italic" | "bold";
  font_weight_title_about?: string;
  font_size_desc_about?: string;
  font_type_desc_about?: "default" | "italic" | "bold";
  font_weight_desc_about?: string;
}

export const About = ({
  button = { size: "small", cta_title: "button", cta_type: "primary" },
  image = "",
  subtitleVisible = true,
  subtitle = "",
  title = "",
  font_size_title_about = "36",
  font_type_title_about = "bold",
  font_weight_title_about = "600",
  font_size_desc_about = "14",
  font_type_desc_about = "default",
  font_weight_desc_about = "300",
  body = "",
  buttonVisible = true,
  imageAlignment = "left",
  bgColor,
  description_color = "#212b36",
  title_color = "#212b36",
}: aboutProps) => {
  const [open, setOpen] = useState<any>(false);

  const AboutImage = () => {
    if (image === "") {
      return null;
    }
    return (
      <div className="imgBox">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt="logo"
          // onClick={() => (window.location.href = "/")}
        />
        {subtitleVisible && <p className="caption">{useFormattedText(subtitle)}</p>}
      </div>
    );
  };
  const AboutDetails = () =>
    title || body || buttonVisible ? (
      <div className="details">
        {title && (
          <p
            className="h4"
            style={{
              color: title_color,
              fontStyle: font_type_title_about,
              fontSize: font_size_title_about,
              fontWeight: font_weight_title_about,
            }}
          >
            {useFormattedText(title)}
          </p>
        )}
        {body && (
          <p
            className="para-md"
            style={{
              color: description_color,
              fontStyle: font_type_desc_about,
              fontSize: font_size_desc_about,
              fontWeight: font_weight_desc_about,
            }}
          >
            {useFormattedText(body)}
          </p>
        )}
        {buttonVisible && (
          <Button
            {...button}
            handleClick={() => {
              setOpen(true);
            }}
          />
        )}
      </div>
    ) : null;

  return AboutImage() && AboutDetails() ? (
    <div
      className={`about`}
      style={
        bgColor ? { backgroundColor: bgColor } : { backgroundColor: `white` }
      }
    >
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
      {open && <Appointment setOpen={setOpen} />}
    </div>
  ) : AboutImage() || AboutDetails() ? (
    <div
      className={`about`}
      style={
        bgColor ? { backgroundColor: bgColor } : { backgroundColor: `white` }
      }
    >
      <div className="container">
        <div className="center">{AboutImage() || AboutDetails()}</div>
      </div>
      {open && <Appointment setOpen={setOpen} />}
    </div>
  ) : null;
};
