/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ButtonProps, classType, classSize, ButtonArrow } from "./Util";

// link, outlined, normal, red button are the types of button
// hover, active, disbled, size, label and normal are the variations
// arrows, onlyLabel, onlyArrow, arrow first, arrowLast are the view options

//classType is used to render the classname for the selected Type
//classSize is used to render the classname for the selected Size
//ButtonArrow renders the jsx element containing img

export const Button = ({
  cta_type = "primary",
  cta_icon = "arrow_forward",
  cta_title = "title",
  cta_action = "open",
  cta_icon_type = "outlined",
  cta_icon_alignment = "none",
  size="medium",
  handleClick = () => {},
}: ButtonProps) => {
  return (
    <button
      className={`btn ${classType(cta_type)} ${classSize(size)} `}
      // disabled={state === "disabled"}
      // style={styles}
      onClick={() => handleClick(cta_action)}
    >
      {cta_icon_alignment === "leading" ? (
        <span style={{fontSize:"16px",marginRight:"8px"}} className={`material-icons-${cta_icon_type}`}>{cta_icon}</span>
      ) : null}
      {cta_title}
      {cta_icon_alignment === "trailing" ? (
        <span style={{fontSize:"16px",marginLeft:"8px"}} className={`material-icons-${cta_icon_type}`}>{cta_icon}</span>
      ) : null}
    </button>
  );
};

// export default Button;
