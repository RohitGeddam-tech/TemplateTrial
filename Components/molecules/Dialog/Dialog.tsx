import React from "react";
import { Button } from "../Button/Button";

interface dialogProps {
  size?: "small" | "medium" | "large";
  showSubtitle?: boolean;
  subtitle?: string;
  showLabel?: boolean;
  label?: string;
  body?: string;
  icon?: boolean;
  footerDivider?: boolean;
  headerDivider?: boolean;
  firstButton?: "primary" | "secondary" | "tertiary" | "danger";
  secondButton?: "primary" | "secondary" | "tertiary" | "danger";
}

export const Dialog = ({
  headerDivider = true,
  footerDivider = false,
  label = "dialog",
  body = "body",
  icon = true,
  showLabel = true,
  size = "medium",
  subtitle = "start",
  showSubtitle = true,
  firstButton = "tertiary",
  secondButton = "primary",
}: dialogProps) => {
  const Size = [
    { label: "small", value: "sm" },
    { label: "medium", value: "md" },
    { label: "large", value: "lg" },
  ];

  const classSize = (size: string) => {
    let name = null;
    for (let i = 0; i < Size.length; i++) {
      if (Size[i].label === size) {
        name = Size[i].value;
      }
    }
    return name;
  };

  const buttona =
    firstButton === "tertiary"
      ? "ghost"
      : firstButton === "secondary"
      ? "tertiary"
      : firstButton;

  const buttonb =
    secondButton === "tertiary"
      ? "ghost"
      : secondButton === "secondary"
      ? "tertiary"
      : secondButton;

  return (
    <div className={`dialog ${classSize(size)}`}>
      <div className={`header ${headerDivider ? "divider" : ""}`}>
        <div className="content">
          {showSubtitle && <p className="overline">{subtitle}</p>}
          {showLabel && <p className="h5">{label}</p>}
          {icon && <span className="material-icons-round">close</span>}
        </div>
      </div>
      <div className={`body`}>
        <p className="para-lg">{body}</p>
      </div>
      <div className={`footer ${footerDivider ? "divider" : ""}`}>
        <div className="content">
          <Button cta_type={buttona} cta_title={firstButton} size="small" />
          <Button cta_type={buttonb} cta_title={secondButton} size="small" />
        </div>
      </div>
    </div>
  );
};
