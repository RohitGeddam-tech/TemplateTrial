import React from "react";

export const useFormattedText = (title) => {
  let str = title;
  const formattedText = str.replace("&nbsp;", "\u00a0").split("\n");

  return (
    <>
      {formattedText.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < formattedText.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};
