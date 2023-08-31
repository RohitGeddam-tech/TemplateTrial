import React from "react";
import { Button } from "../Button/Button";

interface snackbarProps {
  state?: "default" | "info" | "success" | "warning" | "error";
  lines?: 1 | 2;
  actionType?: "no action" | "action" | "longerAction";
  trailingIcon?: boolean;
  label?: string;
}

export const Snackbar = ({
  state = "default",
  lines = 1,
  actionType = "action",
  trailingIcon = false,
  label = "Single-line snack bar",
}: snackbarProps) => {
  return (
    <div className={`snackbar ${lines === 2 ? "multi" : ""} ${state}`}>
      <p>{label}</p>
      {actionType !== "no action" ? (
        <div className="actionBtn">
          <Button Type="ghost" label={actionType} />
        </div>
      ) : null}
      {trailingIcon && <span className="material-icons-round">close</span>}
    </div>
  );
};
