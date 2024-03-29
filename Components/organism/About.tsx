import React, { useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import { Appointment } from "./Appointment";

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
}

export const About = ({
  button = { size: "small", cta_title: "button", cta_type: "primary" },
  image = "",
  subtitleVisible = true,
  subtitle = "",
  title = "",
  body = "",
  buttonVisible = true,
  imageAlignment = "left",
  bgColor,
  description_color = "#212b36",
  title_color = "#212b36",
}: aboutProps) => {
  const [open, setOpen] = useState<any>(false);

  const AboutImage = () =>
  {
    if(image===""){
      return null;
    }
    return  <div className="imgBox">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={image}
      alt="logo"
      // onClick={() => (window.location.href = "/")}
    />
    {subtitleVisible && <p className="caption">{subtitle}</p>}
  </div>
  }
  ;

  const AboutDetails = () =>
   ( title || body || buttonVisible )?(
      <div className="details">
        {title && (
          <p className="h4" style={{ color: title_color }}>
            {title}
          </p>
        )}
        {body && (
          <p className="para-md" style={{ color: description_color }}>
            {body}
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
    ):null;



    return (
      (AboutImage() && AboutDetails()) ? <div
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
    </div> : ( AboutImage() || AboutDetails()) ?     <div
      className={`about`}
      style={
        bgColor ? { backgroundColor: bgColor } : { backgroundColor: `white` }
      }
    >
      <div className="container">
       <div className="center">
        { AboutImage() || AboutDetails()} 
       </div>
      </div>
      {open && <Appointment setOpen={setOpen} />}
    </div> :null
    
    );
};
