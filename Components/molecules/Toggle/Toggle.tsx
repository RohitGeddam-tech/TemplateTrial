import React from "react";

interface toggleProps {
  type?: "start" | "middle" | "end" | string;
  state?: "disabled" | "default" | string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  text?: boolean;
  label?: string;
  size?: "small" | "medium" | "large" | string;
  active?: boolean;
}

export const Toggle = ({
  state = "default",
  leadingIcon = true,
  trailingIcon = false,
  label = "toggle",
  active = true,
  text = true,
  size = "medium",
  type = "start",
}: toggleProps) => {
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

  return (
    <div
      className={`toggle ${classSize(size)} ${active ? "active" : ""} ${
        leadingIcon ? "leadingIcon" : ""
      } ${trailingIcon ? "trailingIcon" : ""} ${
        text ? "" : "noText"
      } ${type} ${state}`}
    >
      {leadingIcon && <span className="material-icons-round">close</span>}
      <p className="para">{label}</p>
      {trailingIcon && <span className="material-icons-round">close</span>}
    </div>
  );
};
