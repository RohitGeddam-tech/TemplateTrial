import React from "react";

export interface radioProps {
  size?: "small" | "medium" | "large";
  state?: "default" | "disabled";
}

export const Radio = ({
  size = "small",
  state = "default",
}: radioProps) => {
  return (
    <div className={`checkboxContain ${state} ${size}`}>
      <label className={`checkbox ${state} radio`}>
        <input type="radio" disabled={state === "disabled"} />
        <span className="checkmark">
          <span className="radioActive"></span>
        </span>
      </label>
    </div>
  );
};
