/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "../molecules/Button/Button";
import { ButtonProps } from "../molecules/Button/Util";
import { Appointment } from "./Appointment";
// import Image from "next/image";
import useWindowSize from "../../utils/useWindowSize";

interface bannerProps {
  title?: string;
  body?: string;
  alignment?: "left" | "right" | "center";
  opacity?: "partial" | "full" | "no";
  image?: string;
  mobImage?: string;
  textAlign?: "left" | "right" | "center";
  bgColor?: string;
  description_color?: string;
  title_color?: string;
  button?: ButtonProps;
}

export const Banner = ({
  title = "TITLE",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image = "https://start.sugarlogger.com/static/media/Main-Banner.be4fadf0.jpg",
  mobImage = "https://start.sugarlogger.com/static/media/Main-Banner.be4fadf0.jpg",
  alignment = "right",
  opacity = "partial",
  textAlign,
  bgColor,
  description_color = "#212b36",
  title_color = "#212b36",
  button = {},
}: bannerProps) => {
  const [open, setOpen] = useState<any>(false);
  const [width] = useWindowSize();
  return (
    <div
      className={`banner ${opacity} ${alignment}`}
      style={
        opacity === "no"
          ? bgColor
            ? { backgroundColor: bgColor }
            : { backgroundColor: `var(--primary-main)` }
          : { backgroundColor: `transparent` }
      }
    >
      {opacity !== "no" && (
        <div className="bgImg">
          {width <= 768 ? (
            <img src={mobImage} alt="background" />
          ) : (
            <img src={image} alt="background" />
          )}
        </div>
      )}
      <div className="container">
        <div className="box">
          <div className="details">
            <p
              className="h2"
              style={{
                textAlign: textAlign ? textAlign : alignment,
                color: title_color,
              }}
            >
              {title}
            </p>
            <p
              className="para-lg"
              style={{
                textAlign: textAlign ? textAlign : alignment,
                color: description_color,
              }}
            >
              {body}
            </p>
          </div>
          <div
            className="content"
            style={{ justifyContent: textAlign ? textAlign : alignment }}
          >
            <Button
              {...button}
              handleClick={() => {
                setOpen(true);
              }}
            />
            {/* <Button Type={buttonb} label={secondButton} size="small" /> */}
          </div>
        </div>
      </div>
      {open && <Appointment setOpen={setOpen} />}
    </div>
  );
};
