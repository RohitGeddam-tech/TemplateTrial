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
  Type = "danger",
  state = "default",
  label = "click here!",
  size = "medium",
  styles = {},
  leadingIcon = false,
  trailingIcon = false,
  text = true,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${classType(Type)} ${classSize(size)} `}
      disabled={state === "disabled"}
      style={styles}
      onClick={()=>handleClick}
    >
      {leadingIcon ? (
        <ButtonArrow
          imgStyle={text ? { marginRight: "10px" } : { marginRight: "5px" }}
        />
      ) : null}
      {text ? `${label}` : null}
      {trailingIcon ? (
        <ButtonArrow
          imgStyle={text ? { marginLeft: "10px" } : { marginLeft: "5px" }}
        />
      ) : null}
    </button>
  );
};

// export default Button;
