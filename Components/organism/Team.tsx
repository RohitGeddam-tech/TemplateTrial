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
    (data.length>0)?
    <div className={`team ${view}`}>
      {data.length > 0 &&
        data.map((doc: any, ind: number) => (
         (doc.image?.data?.attributes?.url || doc.name || doc.designation || doc.desciption) ?<div className={`shrink ${teams > 5 ? "lower" : ""}`} key={ind}>
           {
            doc.image?.data?.attributes?.url ? <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`}
            alt="titleImg"
          /> : null
           }
            <div className="detail">
              {
                doc.name && <p
                className="sub-sm"
                style={{
                  color: title_color,
                }}
              >
                {doc.name}
              </p>
              }
             {
              doc.designation &&  <p
              className="para-md"
              style={{
                color: description_color,
              }}
            >
              {doc.designation}
            </p>
             }
              {teams < 5 && (
               doc.desciption && <p
                  className="para-sm"
                  style={{
                    color: description_color,
                  }}
                >
                  {doc.desciption}
                </p>
              )}
            </div>
          </div>:null
        ))}
    </div> :null
  );
};
