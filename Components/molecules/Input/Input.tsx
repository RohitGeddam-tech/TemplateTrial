import React, { useState } from "react";
import { InputProps } from "./Utils";

const Input = ({
  adornmentType,
  adornmentValue,
  adornment,
  text = "text",
  type = "text",
  required,
  label = "Text",
  name = "text",
  handleChange,
  value,
  leadingIcon,
  trailingIcon,
  leading = "arrow",
  trailing = "cancel",
  helperText,
  helper,
  helperIcon,
  size = "small",
  state = "default",
  characterCounter,
  characterTotal,
  characterValue,
  styles = {},
  handleClear,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      <div
        className={`input-group ${isFocus ? "inputFocused" : ""} ${size} ${
          (value && value !== "") || state === "filled" ? "filled" : ""
        } ${state || state === "disabled" ? state : ""}`}
        style={styles}
      >
        {leadingIcon ? (
          <span className="input-group-text">
            <span className="material-icons-round">{leading}</span>
          </span>
        ) : null}
        {adornment && adornmentType === "prefix" ? (
          <span className="input-group-text">{adornmentValue}</span>
        ) : null}
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          type={"text"}
          value={value}
          name={name}
          onChange={handleChange}
          className={`form-control ${
            adornmentType === "prefix" || leadingIcon ? "prefixLabel" : ""
          }`}
          required={required}
          id={type}
          placeholder={label}
          disabled={state === "disabled"}
        />
        <label htmlFor={type}>
          {label}
          {required ? "*" : ""}
        </label>
        {adornment && adornmentType === "suffix" ? (
          <span className="input-group-text">{adornmentValue}</span>
        ) : null}
        {trailingIcon ? (
          <span className="input-group-text">
            <span className="material-icons-round" onClick={handleClear}>
              {trailing}
            </span>
          </span>
        ) : null}
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

export default Input;
