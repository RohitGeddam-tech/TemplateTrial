import React, { useState } from "react";
import { TextareaProps } from "./Utils";

const Textarea = ({
  required,
  label = "Text",
  handleChange,
  value,
  helperText,
  helper,
  helperIcon,
  state = "default",
  characterCounter,
  characterTotal,
  characterValue,
  styles = {},
}: TextareaProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <div
        className={`input-group ${isFocus ? "inputFocused" : ""} textarea ${
          (value && value !== "") || state === "filled" ? "filled" : ""
        } ${state || state === "disabled" ? state : ""}`}
        style={styles}
      >
        <textarea
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          // type={type}
          value={value}
          name={label}
          onChange={handleChange}
          className={`form-control`}
          required={required}
          id={label}
          placeholder={label}
          disabled={state === "disabled"}
        />
        <label htmlFor={label}>
          {label}
          {required ? "*" : ""}
        </label>
      </div>
      <div className="bottomLayer">
        {helper ? (
          <p
            className={`inputFeedback ${
              (state && value && value !== "") || state === "disabled"
                ? state
                : ""
            }`}
          >
            {helperIcon ? (
              <span className="material-icons-outlined">info</span>
            ) : null}
            {helperText}
          </p>
        ) : null}
        {characterCounter ? (
          <p
            className={`inputFeedback ${
              (state && value && value !== "") || state === "disabled"
                ? state
                : ""
            }`}
          >
            {characterValue && characterValue > 0 ? characterValue : 0}/
            {characterTotal}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Textarea;
