import React from "react";

const SliderPrevArrow = (props: any) => {
  const { onClick } = props;

  console.log(props);
  return (
    <button
      type="button"
      aria-label="prevArrow"
      data-role="none"
      className={`${props.className} slickPrev ${props.currentSlide === 0 ? 'disabled' : ''}`}
      // style={{ display: "none" }}
      onClick={onClick}
    >
      <span className="material-icons-round">arrow_back</span>
    </button>
  );
};

export default SliderPrevArrow;
