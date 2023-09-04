import React from "react";

interface chipsProps {
  size?: "small" | "medium" | "large";
  state?: "disabled" | "default" | "dragged";
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  label?: string;
  active?: boolean;
  outline?: boolean;
}

export const Chips = ({
  state = "default",
  size = "medium",
  leadingIcon = false,
  trailingIcon = true,
  label = "Chips",
  active = false,
  outline = true,
}: chipsProps) => {
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
      className={`chips ${classSize(size)} ${active ? "active" : ""} ${
        leadingIcon ? "leadingIcon" : ""
      } ${trailingIcon ? "trailingIcon" : ""} ${
        outline ? "outline" : ""
      } ${state}`}
    >
      {leadingIcon && <span className="material-icons-round">close</span>}
      <p className="para">{label}</p>
      {trailingIcon && <span className="material-icons-round">close</span>}
    </div>
  );
};
