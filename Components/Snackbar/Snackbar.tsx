import React from "react";

interface snackbarProps {
  state?: "default" | "info" | "success" | "warning" | "error";
  lines?: 1 | 2;
  actionType?: "action" | "longerAction";
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
    <div>
      <h1>hello</h1>
    </div>
  );
};
