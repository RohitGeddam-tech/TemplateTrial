/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cardProps } from "./Card";

interface teamProps {
  teams?: number;
  view?: "grid" | "line";
  data?: Array<cardProps>;
  description_color?: string;
  title_color?: string;
}

export const Team = ({
  teams = 3,
  data = [],
  view = "grid",
  description_color = "#212b36",
  title_color = "#212b36",
}: teamProps) => {
  return (
    <div className={`team ${view}`}>
      {data.length > 0 &&
        data.map((doc: any, ind: number) => (
          <div className={`shrink ${teams > 5 ? "lower" : ""}`} key={ind}>
            <img
              src={`https://buildercms.aashirwadlab.co.in${doc.image?.data?.attributes?.url}`}
              alt="titleImg"
            />
            <div className="detail">
              <p
                className="sub-sm"
                style={{
                  color: title_color,
                }}
              >
                {doc.name}
              </p>
              <p
                className="para-md"
                style={{
                  color: description_color,
                }}
              >
                {doc.designation}
              </p>
              {teams < 5 && (
                <p
                  className="para-sm"
                  style={{
                    color: description_color,
                  }}
                >
                  {doc.desciption}
                </p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
