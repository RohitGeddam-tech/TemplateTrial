import React from "react";
import "./text.css";

interface TextProps {
  label?: string;
  size?: "small" | "medium" | "large";
}

export const Text = ({ label = "Medium", size = "medium" }: TextProps) => {
  return (
    <h1 className={["storybook-button", `storybook-button--${size}`].join(" ")}>
      {label}
    </h1>
  );
};
