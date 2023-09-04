import React from "react";
// import { Button } from "../Button/Button";

interface snackbarProps {
  state?: "default" | "info" | "success" | "warning" | "error";
  lines?: number;
  // actionType?: "no action" | "action" | "longerAction";
  trailingIcon?: boolean;
  label?: string;
  action?: boolean;
}

export const Snackbar = ({
  state = "default",
  lines = 1,
  // actionType = "longerAction",
  trailingIcon = true,
  label = "Single-line Snack bar",
  action = true,
}: snackbarProps) => {
  return (
    <div className={`snackbar ${lines > 2 ? "block" : ""} ${!action ? "noAction" : ""} ${!trailingIcon ? "noIcon" : ""} ${state}`}>
      <p className="para">{label}</p>
      {action ? (
        <div className="actionBtn">
          <button>Action</button>
        </div>
      ) : null}
      {trailingIcon && <span className="material-icons-round">close</span>}
    </div>
  );
};
