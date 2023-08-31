import React from "react";

interface badgeProps {
  state?: "default" | "info" | "success" | "warning" | "error";
  type?: "small" | "single digit" | "multiple digits";
  colors?: "loud" | "subtle";
  label?: string;
}

export const Badges = ({
  state = "default",
  type = "single digit",
  colors = "loud",
  label = "1",
}: badgeProps) => {
  const types = [
    { label: "small", value: "sm" },
    { label: "single digit", value: "single" },
    { label: "multiple digits", value: "multi" },
  ];

  function classType(type: "small" | "single digit" | "multiple digits") {
    let name = null;
    for (let i = 0; i < types.length; i++) {
      if (types[i].label === type) {
        name = types[i].value;
      }
    }
    return name;
  }

  return (
    <div className={`badges ${state} ${colors} ${classType(type)}`}>
      {label === "" && type === "multiple digits"
        ? label || "123"
        : label === "" && type === "single digit"
        ? label || "1"
        : label}
    </div>
  );
};
