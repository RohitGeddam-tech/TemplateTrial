/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ButtonProps, classType, classSize } from "./Util";

export const Fab = ({
  Type = "primary",
  state = "default",
  size = "medium",
  styles = {},
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn fab ${classType(Type)} ${classSize(size)} `}
      disabled={state === "disabled"}
      style={styles}
      onClick={() => handleClick}
    >
      <span className="material-icons-outlined">add</span>
    </button>
  );
};

// export default Button;
