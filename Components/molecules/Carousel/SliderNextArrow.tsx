import React from "react";
import next from "../images/arrowRight.svg";

const SliderNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      aria-label="nextArrow"
      data-role="none"
      className={`${props.className} slickNext ${
        props.slideCount - 1 === props.currentSlide ? "disabled" : ""
      }`}
      // style={{ display: "block" }}
      onClick={onClick}
    >
      <span className="material-icons-round">arrow_forward</span>
    </button>
  );
};

export default SliderNextArrow;
