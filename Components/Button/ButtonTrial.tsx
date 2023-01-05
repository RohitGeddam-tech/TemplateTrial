/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ButtonTrialProps, labelView, classOpt, classVar } from "./Util";

// link, outlined, normal, red button are the types of button
// hover, active, disbled, size, label and normal are the variations
// arrows, onlyLabel, onlyArrow, arrow first, arrowLast are the view options

//classOpt is used to render the classname for the selection option
//classVar is used to render the classname for the selection variation
//labelView is used to render the jsx content of button fr various arrow and label views.

export const ButtonTrial = ({
  width = 20,
  height = 20,
  opt = "normal",
  variations = "normal",
  label = "click here!",
  size = "md",
  view = "arrowLast",
  styles = {},
}: ButtonTrialProps) => {
  return (
    <button
      className={`btn ${classOpt(opt)} btn-${size} ${classVar(variations)}`}
      disabled={variations === "disabled"}
      style={styles}
    >
      {labelView({ view, width, height, label })}
    </button>
  );
};

// export default Button;
