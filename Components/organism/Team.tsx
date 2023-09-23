/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cardProps } from "./Card";

interface teamProps {
  teams?: number;
  view?: "grid" | "line";
  data?: Array<cardProps>;
}

export const Team = ({ teams = 3, data = [], view = "grid" }: teamProps) => {
  return (
    <div className={`team ${view}`}>
      {data.length > 0 &&
        data.map((doc, ind) => (
          <div className={`shrink ${teams > 5 ? "lower" : ""}`} key={ind}>
            <img src={doc.image} alt="titleImg" />
            <div className="detail">
              <p className="sub-sm">{doc.title}</p>
              <p className="para-md">{doc.subtitle}</p>
              {teams < 5 && <p className="para-sm">{doc.para}</p>}
            </div>
          </div>
        ))}
    </div>
  );
};
