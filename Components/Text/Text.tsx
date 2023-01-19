import React from "react";

// "h1" | "h2" | "h3" | "h4" | "h5"

export interface TextProps {
  label?: string;
  headings?: "h1" | "h2" | "h3" | "h4" | "h5";
  subTitle?: "sm" | "md" | "lg";
  body?: "sm" | "md" | "lg";
  caption?: boolean;
  overline?: boolean;
}

export const Text = ({
  label = "Text",
  headings = "h1",
  subTitle = undefined,
  body = undefined,
  caption = false,
  overline = false,
}: TextProps) => {
  return (
    <p
      className={`${headings !== undefined ? headings : ""} ${
        subTitle !== undefined ? `sub sub-${subTitle}` : ""
      } ${body !== undefined ? `para para-${body}` : ""} ${
        caption ? `caption` : ""
      } ${overline ? "overline" : ""}`}
    >
      {label}
    </p>
  );
};
