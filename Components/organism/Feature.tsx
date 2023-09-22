/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cardProps } from "./Card";

interface featureProps {
  features?: number;
  data?: Array<cardProps>;
}

export const Feature = ({ features = 3, data = [] }: featureProps) => {
  // console.log(`${features % 3 === 0}`);
  return (
    <div className={`feature ${features % 4 === 0 ? "small" : ""}`}>
      {data.length > 0 &&
        data.map((doc, ind) => (
          <div key={ind}>
            {features < 5 ? (
              <div className="shrink">
                <div className="head">
                  <img src={doc.image} alt="titleImg" />
                  <p className="para-lg">{doc.title}</p>
                </div>
                <p className="para-md">{doc.para}</p>
              </div>
            ) : (
              <div className="normal">
                <div className="head">
                  <img src={doc.image} alt="titleImg" />
                  <p className="para-lg">{doc.title}</p>
                </div>
                <p className="para-md">{doc.para}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
