import React from "react";
import { Button } from "../Button/Button";

interface drawerProps {
  placement?: "left" | "bottom" | "right";
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

export const Drawer = ({
  headerDivider = true,
  footerDivider = false,
  label = "drawer",
  body = "body",
  icon = true,
  showLabel = true,
  placement = "left",
  subtitle = "start",
  showSubtitle = true,
  firstButton = "tertiary",
  secondButton = "primary",
}: drawerProps) => {
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
    <div className={`drawer ${placement}`}>
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
          <Button Type={buttona} label={firstButton} size="small" />
          <Button Type={buttonb} label={secondButton} size="small" />
        </div>
      </div>
    </div>
  );
};
