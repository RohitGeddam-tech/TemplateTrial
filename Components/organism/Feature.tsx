/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cardProps } from "./Card";

interface featureProps {
  features?: number;
  data?: Array<cardProps>;
  alignment?: string;
  description_color?:string;
  title_color?:string;
  title_font_size?:string;
  title_font_type?:string;
  title_font_weight?: string;
  description_font_size?:string;
  description_font_type?:string;
  description_font_weight?: string;
}

export const Feature = ({
  features = 3,
  data = [],
  alignment = "vertical",
  description_color="black",
  title_color="black",
  title_font_size="",
  title_font_type="",
  title_font_weight="",
  description_font_size="",
  description_font_type="",
  description_font_weight="",
}: featureProps) => {
    
  return (
   data?.length > 0 ? <div className={`feature ${features % 4 === 0 ? "small" : ""}`}>
      {data?.length > 0 &&
        data.map((doc, ind) => (
          <div key={ind}>
            {alignment === "vertical" ? (
           (doc.image?.data?.attributes?.url || doc.title || doc.sub_title || doc.description)  ? <div className="shrink">
              {(doc.image?.data?.attributes?.url || doc.title) && <div className="head">
                {doc.image?.data?.attributes?.url ?<img src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`} alt="titleImg" />:null}
                { doc.title &&   <p className="para-lg" style={{color:title_color,fontSize:title_font_size,fontStyle:title_font_type,fontWeight:title_font_weight}}>{doc.title}</p>}
                </div>}
                {doc.sub_title && <div className="para-sm" style={{color:title_color}}>{doc.sub_title}</div> }
               {doc.description &&  <p className="para-md" style={{color:description_color,fontSize:description_font_size,fontStyle:description_font_type,fontWeight:description_font_weight}}>{doc.description}</p>}
              </div> :null
            ) : (
              (doc.image?.data?.attributes?.url || doc.title || doc.sub_title || doc.description) ?  <div className="normal">
                 {(doc.image?.data?.attributes?.url || doc.title) && <div className="head">
                {doc.image?.data?.attributes?.url ?<img src={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`} alt="titleImg" />:null}
                { doc.title &&   <p className="para-lg" style={{color:title_color}}>{doc.title}</p>}
                </div>}
                {doc.sub_title && <div className="para-sm" style={{color:title_color}}>{doc.sub_title}</div> }
                {doc.description &&  <p className="para-md" style={{color:description_color}}>{doc.description}</p>}
              </div>  : null
            )}
          </div>
        ))}
    </div>: null
  );
};
