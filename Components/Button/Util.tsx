/* eslint-disable @next/next/no-img-element */

export interface ButtonTrialProps {
  opt?: "link" | "normal" | "outline" | "red";
  variations?: "active" | "disabled" | "normal";
  label?: string;
  size?: "sm" | "md" | "lg";
  view?: "onlyArrow" | "onlyLabel" | "arrowFirst" | "arrowLast";
  styles?: Object;
}

export const buttonOptions = [
  { label: "link", value: "btn-link" },
  { label: "normal", value: "btn-primary" },
  { label: "outline", value: "btn-outline-info" },
  { label: "red", value: "btn-danger" },
];

export const buttonVar = ["active", "disabled", "normal"];

interface LabelProps {
  view: string;
  label: string;
}

export const labelView = ({ view, label }: LabelProps) => {
  return (
    <>
      {view === "arrowFirst" ? (
        <>
          <img
            src={"/arrow-right-short.svg"}
            alt="arrow"
            style={{marginRight:"10px"}}
          />
          {label}
        </>
      ) : null}
      {view === "arrowLast" ? (
        <>
          {label}
          <img
            src={"/arrow-right-short.svg"}
            alt="arrow"
            style={{marginLeft:"10px"}}
          />
        </>
      ) : null}
      {view === "onlyArrow" ? (
        <>
          <img
            src={"/arrow-right-short.svg"}
            alt="arrow"
          />
        </>
      ) : null}
      {view === "onlyLabel" ? <>{label}</> : null}
    </>
  );
};

export const classOpt = (opt:string) => {
  let name = null;
  for (let i = 0; i < buttonOptions.length; i++) {
    if (buttonOptions[i].label === opt) {
      name = buttonOptions[i].value;
    }
  }
  return name;
};

export const classVar = (variations:string) => {
  let name = "";
  for (let i = 0; i < buttonVar.length; i++) {
    if (buttonVar[i] === variations) name = `${buttonVar[i]}`;
  }
  console.log(name);
  return name;
};