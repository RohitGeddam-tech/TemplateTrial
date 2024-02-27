/* eslint-disable @next/next/no-img-element */

export interface ButtonProps {
  // Type?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";
  // state?: "disabled" | "default";
  // label?: string;
  size?: "small" | "medium" | "large";
  // styles?: Object;
  // trailingIcon?: boolean;
  // leadingIcon?: boolean;
  // text?: boolean;
  cta_type?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";
  cta_icon?: string;
  cta_title?: string;
  cta_action?: string;
  cta_icon_type?: string;
  cta_icon_alignment?: "leading" | "trailing" | "none";
  handleClick?: (cta_action: string) => void;
}

export const buttonOptions = [
  { label: "ghost", value: "btn-link" },
  { label: "primary", value: "btn-primary" },
  { label: "tertiary", value: "btn-outline-info" },
  { label: "secondary", value: "btn-danger" },
  { label: "danger", value: "btn-error" },
];

export const buttonSize = [
  { label: "small", value: "btn-sm" },
  { label: "medium", value: "btn-md" },
  { label: "large", value: "btn-lg" },
];

// export const buttonVar = ["disabled", "default"];

export const classType = (type: string) => {
  let name = null;
  for (let i = 0; i < buttonOptions.length; i++) {
    if (buttonOptions[i].label === type) {
      name = buttonOptions[i].value;
    }
  }
  return name;
};

export const classSize = (size: string) => {
  let name = null;
  for (let i = 0; i < buttonSize.length; i++) {
    if (buttonSize[i].label === size) {
      name = buttonSize[i].value;
    }
  }
  return name;
};

interface ArrowButton {
  imgStyle: object;
}

export const ButtonArrow = ({ imgStyle }: ArrowButton) => {
  return (
    <img
      src={"/arrow-right-short.svg"}
      loading="lazy"
      alt="arrow"
      style={imgStyle}
    />
  );
};
