import React from "react";

export interface TextProps {
  label?: string;
  title?: "h1" | "h2" | "h3" | "h4" | "h5" | "null";
  subTitle?: "sm" | "md" | "lg" | "null";
  body?: "sm" | "md" | "lg" | "null";
  caption?: "normal" | "overline" | "null";
}

export const Text = ({
  label = "Text",
  title = "h1",
  subTitle = "null",
  body = "null",
  caption = "null",
}: TextProps) => {
  return (
    <p
      className={`${title !== "null" ? title : ""} ${
        subTitle !== "null" ? `sub sub-${subTitle}` : ""
      } ${body !== "null" ? `para para-${body}` : ""} ${
        caption !== "null" ? `caption caption-${caption}` : ""
      }`}
    >
      {label}
    </p>
  );
};
