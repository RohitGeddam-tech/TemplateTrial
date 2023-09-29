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
}: titleCardProps) => {
  return (
    <div className={`titleCard`}>
      <div className="container">
        <p className="h4">{title}</p>
        <p className="para-md">{body}</p>
        {carousel && cardType !== "feature" && cardType !== "team" ? (
          <Carousel
            slidesToShow={carouselProps.slidesToShow}
            arrow={carouselProps.arrow}
            dots={carouselProps.dots}
          >
            {data.length > 0 &&
              data.map((doc, ind) => (
                <div key={ind}>
                  <Card cardType={cardType} {...doc} />
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
