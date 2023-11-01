/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cardProps } from "./Card";

interface featureProps {
  features?: number;
  data?: Array<cardProps>;
  alignment?: string;
  description_color?:string;
  title_color?:string;
}

export const Feature = ({
  features = 3,
  data = [],
  alignment = "vertical",
  description_color="black",
  title_color="black",
}: featureProps) => {
  return (
    <div className={`feature ${features % 4 === 0 ? "small" : ""}`}>
      {data.length > 0 &&
        data.map((doc, ind) => (
          <div key={ind}>
            {alignment === "vertical" ? (
              <div className="shrink">
                <div className="head">
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`} alt="titleImg" />
                  <p className="para-lg" style={{color:title_color}}>{doc.title}</p>
                </div>
                <p className="para-md" style={{color:description_color}}>{doc.description}</p>
              </div>
            ) : (
              <div className="normal">
                <div className="head">
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`} alt="titleImg" />
                  <p className="para-lg" style={{color:title_color}}>{doc.title}</p>
                </div>
                <p className="para-md" style={{color:description_color}}>{doc.description}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
