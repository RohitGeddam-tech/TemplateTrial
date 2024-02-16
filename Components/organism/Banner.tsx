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
  title = "",
  body = "",
  image = "",
  mobImage = "",
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
  return (title || body || image || mobImage || button.cta_title) ? (
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
      
      {title || body || button.cta_title|| image || mobImage || opacity !== "no" ? (
        <div className="container">
                       
                       {opacity !== "no" && (
        <div className="bgImg">
          {width <= 768 && mobImage !== undefined && mobImage !== "" ? (
            <img src={mobImage} alt="background" />
          ) : (
            <img src={image} alt="background" />
          )}
        </div>
      )}
     { (title || body || button.cta_title  ) ?
      <div className="box">
      {(title || body )  ?<div className="details">
          {title && (
            <p
              className="h2"
              style={{
                textAlign: textAlign ? textAlign : alignment,
                color: title_color,
              }}
            >
              {title}
            </p>
          )}
          {body && (
            <p
              className="para-lg"
              style={{
                textAlign: textAlign ? textAlign : alignment,
                color: description_color,
              }}
            >
              {body}
            </p>
          )}
        </div>: null}
        {button.cta_title && (
          <div
            className="content"
            style={{ justifyContent: textAlign ? textAlign : alignment }}
          >
            {button.cta_title && (
              <Button
                {...button}
                handleClick={() => {
                  setOpen(true);
                }}
              />
            )}
            {/* <Button Type={buttonb} label={secondButton} size="small" /> */}
          </div>
        )}
      </div> : null
     }


        </div>
      ) : null}
      {open && <Appointment setOpen={setOpen} />}
    </div>
  ) : null;
};
