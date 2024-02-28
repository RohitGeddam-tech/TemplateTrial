/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "../molecules/Button/Button";
import { ButtonProps } from "../molecules/Button/Util";
import { Appointment } from "./Appointment";
// import Image from "next/image";
import useWindowSize from "../../utils/useWindowSize";
import { useFormattedText } from "../../utils/useFormattedText";

interface bannerProps {
  title?: string;
  title_font_size?: string;
  title_font_type?: "default" | "italic" | "bold";
  title_font_weight?: string;
  description_font_size?: string;
  description_font_type: "default" | "italic" | "bold";
  description_font_weight?: string;
  body?: string;
  alignment?: "left" | "right" | "center";
  opacity?: "partial" | "full" | "no";
  content_position: "top " | "center" | "bottom";
  content_box_opacity: "partial" | "full" | "no";
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
  title_font_size = "36",
  title_font_type = "default",
  title_font_weight = "600",
  description_font_size = "14",
  description_font_type = "bold",
  description_font_weight = "300",
  body = "",
  image = "",
  mobImage = "",
  alignment = "right",
  opacity = "partial",
  content_position = "center",
  content_box_opacity = "partial",
  textAlign,
  bgColor,
  description_color = "#212b36",
  title_color = "#212b36",
  button = {},
}: bannerProps) => {
  const [open, setOpen] = useState<any>(false);
  const [width] = useWindowSize();
  // console.log(title_font_type,title_font_size,title_font_weight);

  return title || body || image || mobImage || button.cta_title ? (
    <div
      className={`banner ${opacity} ${alignment} ${
        content_position === "center" ? "middle" : content_position
      }`}
      style={
        opacity === "no"
          ? bgColor
            ? { backgroundColor: bgColor }
            : { backgroundColor: `var(--primary-main)` }
          : { backgroundColor: `transparent` }
      }
    >
      {title || body || button.cta_title || image || mobImage || opacity ? (
        <div className="container">
          {opacity !== "no" && (
            <div className="bgImg">
              {width <= 768 && mobImage !== undefined && mobImage !== "" ? (
                <img src={mobImage} alt="background" loading="lazy" />
              ) : (
                <img src={image} alt="background" loading="lazy" />
              )}
            </div>
          )}
          {title || body || button.cta_title ? (
            <div className={`box ${content_box_opacity}`}>
              {title || body ? (
                <div className="details">
                  {title && (
                    <p
                      className="h2"
                      style={{
                        textAlign: textAlign ? textAlign : alignment,
                        color: title_color,
                        fontSize: title_font_size,
                        fontStyle: title_font_type,
                        fontWeight: title_font_weight,
                      }}
                    >
                      {useFormattedText(title)}
                    </p>
                  )}
                  {body && (
                    <p
                      className="para-lg"
                      style={{
                        textAlign: textAlign ? textAlign : alignment,
                        color: description_color,
                        fontSize: description_font_size,
                        fontStyle: description_font_type,
                        fontWeight: description_font_weight,
                      }}
                    >
                      {useFormattedText(body)}
                    </p>
                  )}
                </div>
              ) : null}
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
            </div>
          ) : null}
        </div>
      ) : null}
      {open && <Appointment setOpen={setOpen} />}
    </div>
  ) : null;
};
