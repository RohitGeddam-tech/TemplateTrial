import React from "react";
import Carousel, { carouselProps } from "../molecules/Carousel";
import Card, { cardProps } from "./Card";
import { Feature } from "./Feature";
import { Team } from "./Team";

interface titleCardProps {
  title?: string;
  body?: string;
  carousel?: boolean;
  carouselProps?: carouselProps;
  cardType?: "default" | "images" | "testimonial" | "feature" | "team";
  data?: Array<cardProps>;
  children?: any;
  view?: "grid" | "line";
  bgColor?: string;
  description_color?: string;
  title_color?: string;
}

export const TitleCard = ({
  title = "Title",
  body = "body",
  carousel = true,
  carouselProps = {
    slidesToShow: 1,
    arrow: true,
    dots: false,
    children: [],
  },
  data = [],
  cardType = "testimonial",
  children,
  view = "grid",
  bgColor,
  description_color = "#212b36",
  title_color = "#212b36",
}: titleCardProps) => {
  return (
    <div
      className={`titleCard`}
      style={
        bgColor
          ? { backgroundColor: bgColor }
          : { backgroundColor: `white` }
      }
    >
      <div className="container">
        <p className="h4" style={{color:title_color}}>{title}</p>
        <p className="para-md" style={{color:description_color}}>{body}</p>
        {carousel && cardType !== "feature" && cardType !== "team" ? (
          <Carousel
            slidesToShow={carouselProps.slidesToShow}
            arrow={carouselProps.arrow}
            dots={carouselProps.dots}
          >
            {data.length > 0 &&
              data.map((doc, ind) => (
                <div key={ind}>
                  <Card
                    cardType={cardType}
                    // button={{
                    //   cta_type: doc.cta_type,
                    //   cta_icon: doc.cta_icon,
                    //   cta_title: doc.cta_title,
                    //   cta_action: doc.cta_action,
                    //   cta_icon_type: doc.cta_icon_type,
                    //   cta_icon_alignment: doc.cta_icon_alignment,
                    // }}
                    // image={`${process.env.NEXT_PUBLIC_API_URL}${doc.image?.data?.attributes?.url}`}
                    title={doc.title}
                    para={doc.description}
                    subtitle={doc.subtitle}
                    description_color={description_color}
                    title_color={title_color}
                  />
                </div>
              ))}
          </Carousel>
        ) : (
          <>
            {cardType === "feature" ? (
              <Feature data={data} features={data?.length} />
            ) : (
              <>
                {cardType === "team" ? (
                  <Team data={data} teams={data?.length} view={view} />
                ) : (
                  <>{children}</>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
