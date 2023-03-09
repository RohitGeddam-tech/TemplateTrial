import React from "react";

export interface checkboxProps {
  size?: "small" | "medium" | "large";
  state?: "default" | "disabled";
  type?: "default" | "Indeterminate";
}

export const Checkbox = ({
  size = "medium",
  state = "default",
  type = "default",
}: checkboxProps) => {
  return (
    <div className={`checkboxContain ${state} ${size}`}>
      <label className={`checkbox ${state}`}>
        <input type="checkbox" disabled={state === "disabled"} />
        <span className="checkmark">
          <span className="material-icons-round">
            {type !== "default" ? "remove" : "done"}
          </span>
        </span>
      </label>
    </div>
  );
};
