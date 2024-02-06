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
   data.length > 0 ? <div className={`feature ${features % 4 === 0 ? "small" : ""}`}>
      {data.length > 0 &&
        data.map((doc, ind) => (
          <div key={ind}>
            {alignment === "vertical" ? (
              <div className="shrink">
              {(doc.image?.data?.attributes?.url || doc.title) && <div className="head">
                {doc.image?.data?.attributes?.url ?<img src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`} alt="titleImg" />:null}
                { doc.title &&   <p className="para-lg" style={{color:title_color}}>{doc.title}</p>}
                </div>}
               {doc.description &&  <p className="para-md" style={{color:description_color}}>{doc.description}</p>}
              </div>
            ) : (
              <div className="normal">
                 {(doc.image?.data?.attributes?.url || doc.title) && <div className="head">
                {doc.image?.data?.attributes?.url ?<img src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`} alt="titleImg" />:null}
                { doc.title &&   <p className="para-lg" style={{color:title_color}}>{doc.title}</p>}
                </div>}
                {doc.description &&  <p className="para-md" style={{color:description_color}}>{doc.description}</p>}
              </div>
            )}
          </div>
        ))}
    </div>: null
  );
};
