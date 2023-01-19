/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import React from "react";
// import arrowRight from "./right-arrow.png";

// link, outlined, normal, red button are the types of button
// hover, active, disbled, size and normal are the variations
// arrows, onlyLabel, onlyArrow, arrow first, arrowLast are the view options

interface ButtonTrialProps {
  color?:
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "light"
    | "dark"
    | "link"
    | "danger"
    | "primary";
  label?: string;
  type?: "button" | "submit";
  outline?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  active?: boolean;
  styles?: Object;
  arrow?: boolean;
  onlyLabel?: boolean;
  arrowFirst?: boolean;
  arrowLast?: boolean;
  width?: number;
  height?: number;
}

export const ButtonTrial = ({
  color = "primary",
  label = "button",
  type = "button",
  outline = false,
  size = "md",
  disabled = false,
  active = false,
  styles = {},
  arrow = false,
  onlyLabel = true,
  arrowFirst = false,
  arrowLast = false,
  width = 20,
  height = 20,
}: ButtonTrialProps) => {
  return (
    <button
      className={`btn ${
        outline ? `btn-outline-${color}` : `btn-${color}`
      } btn-${size} ${active ? `active` : ""}`}
      type={type}
      disabled={disabled}
      style={styles}
    >
      {arrow && arrowFirst ? (
        <img
          src={"/arrow-right-short.svg"}
          alt="arrow"
          width={width}
          height={height}
        />
      ) : null}{" "}
      {onlyLabel ? `${label}` : ""}{" "}
      {arrow && !onlyLabel ? (
        <img
          src={"/arrow-right-short.svg"}
          alt="arrow"
          width={width}
          height={height}
        />
      ) : null}{" "}
      {arrow && arrowLast ? (
        <img
          src={"/arrow-right-short.svg"}
          alt="arrow"
          width={width}
          height={height}
        />
      ) : null}
    </button>
  );
};

export default ButtonTrial;
