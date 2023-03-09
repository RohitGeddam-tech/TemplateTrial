import React, { useState } from "react";
import { InputProps } from "./Utils";

const Input = ({
  adornment,
  text = "text",
  type = "text",
  required,
  label = "Text*",
  handleChange,
  value,
  leadingIcon,
  trailingIcon,
  helperText,
  size = "small",
  state = "default",
  characterCounter,
  styles = {},
  handleClear
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
        {leadingIcon ? <span className="input-group-text lead">@</span> : null}
        {adornment?.value === "prefix" ? (
          <span className="input-group-text">{adornment?.text}</span>
        ) : null}
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          type={type}
          value={value}
          name={text}
          onChange={handleChange}
          className={`form-control ${
            adornment?.value === "prefix" || leadingIcon ? "prefixLabel" : ""
          }`}
          required={required}
          id={type}
          placeholder={label}
          disabled={state === "disabled"}
        />
        <label htmlFor={type}>{label}</label>
        {adornment?.value === "suffix" ? (
          <span className="input-group-text">{adornment?.text}</span>
        ) : null}
        {trailingIcon ? (
          <span className="input-group-text">
            <span className="material-icons-round" onClick={handleClear}>cancel</span>
          </span>
        ) : null}
      </div>
      <div className="bottomLayer">
        {helperText?.value ? (
          <p
            className={`inputFeedback ${
              (state && value && value !== "") || state === "disabled"
                ? state
                : ""
            }`}
          >
            {helperText?.helperIcon ? (
              <span className="material-icons-outlined">info</span>
            ) : null}
            {helperText?.text}
          </p>
        ) : null}
        {characterCounter?.total ? (
          <p
            className={`inputFeedback ${
              (state && value && value !== "") || state === "disabled"
                ? state
                : ""
            }`}
          >
            {characterCounter?.value && characterCounter?.value > 0
              ? characterCounter?.value
              : 0}
            /{characterCounter.total}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default Input;
