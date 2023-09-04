import React from "react";

interface tabsProps {
  type?: "vertical" | "horizontal";
  state?: "disabled" | "default";
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  text?: boolean;
  label?: string;
  icon?: boolean;
  active?: boolean;
}

export const Tabs = ({
  state = "default",
  leadingIcon = true,
  trailingIcon = false,
  label = "tabs",
  active = true,
  text = true,
  icon = true,
  type = "vertical",
}: tabsProps) => {
  return (
    <div
      className={`tabs ${active ? "active" : ""} ${
        leadingIcon && icon ? "leadingIcon" : ""
      } ${trailingIcon && icon ? "trailingIcon" : ""} ${text ? '' : 'noText'} ${type} ${state}`}
    >
      {active ? (
        <div className="activeContent">
          <div className="content">
            {leadingIcon && icon && (
              <span className="material-icons-outlined">
                sentiment_satisfied
              </span>
            )}
            {text && <p className="para">{label}</p>}
            {trailingIcon && icon && (
              <span className="material-icons-outlined">
                sentiment_satisfied
              </span>
            )}
          </div>
          <div className="activeBorder"></div>
        </div>
      ) : (
        <div className="content">
          {leadingIcon && icon && (
            <span className="material-icons-outlined">sentiment_satisfied</span>
          )}
          {text && <p className="para">{label}</p>}
          {trailingIcon && icon && (
            <span className="material-icons-outlined">sentiment_satisfied</span>
          )}
        </div>
      )}
    </div>
  );
};
