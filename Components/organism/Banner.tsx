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

  let str = title;
  const formattedText = str.replace(/ /g, "\u00a0").split("\n");

  // str = str.replace(/ /g, '\u00a0');
  // str = str.split("\n").join("<br/>");
  // console.log(title?.replaceAll('&crarr;','\u021b5'), "banner");

  return title || body || image || mobImage || button.cta_title ? (
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
      {title || body || button.cta_title || image || mobImage || opacity ? (
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
          {title || body || button.cta_title ? (
            <div className="box">
              {title || body ? (
                <div className="details">
                  {title && (
                    <>
                      {formattedText.map((line, index) => (
                        // Use React.Fragment to represent each line with a key
                        <p
                          key={index}
                          className="h2"
                          style={{
                            textAlign:
                              textAlign === "right"
                                ? "center"
                                : textAlign
                                ? textAlign
                                : alignment,
                            color: title_color,
                          }}
                        >
                          {line}
                          {/* Add a <br/> after each line except the last one */}
                          {index < formattedText.length - 1 && <br />}
                        </p>
                      ))}
                    </>
                  )}
                  {/* {title && (
                    <p
                      className="h2"
                      style={{
                        textAlign:
                          textAlign === "right"
                            ? "center"
                            : textAlign
                            ? textAlign
                            : alignment,
                        color: title_color,
                      }}
                      dangerouslySetInnerHTML={{ __html: str }}
                    >
                    </p>
                  )} */}
                  {body && (
                    <p
                      className="para-lg"
                      style={{
                        textAlign:
                          textAlign === "right"
                            ? "center"
                            : textAlign
                            ? textAlign
                            : alignment,
                        color: description_color,
                      }}
                    >
                      {body}
                    </p>
                  )}
                </div>
              ) : null}
              {button.cta_title && (
                <div
                  className="content"
                  style={{
                    justifyContent:
                      textAlign === "right"
                        ? "center"
                        : textAlign
                        ? textAlign
                        : alignment,
                  }}
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
