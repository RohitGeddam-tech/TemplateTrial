import React from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import { InputProps } from "../molecules/Input/Utils";
import Input from "../molecules/Input/Input";
import Link from "next/link";

interface contactProps {
  formAlignment?: "left" | "right";
  button?: ButtonProps;
  title?: string;
  body?: string;
  details?: Array<{
    label: string;
    value: string;
    link: string;
  }>;
  inputBox?: Array<InputProps>;
  formTitle?: string;
}

export const Contact = ({
  button = { label: "button", Type: "primary", size: "small" },
  details = [],
  title = "Contact Us",
  body = "body",
  inputBox = [],
  formAlignment = "left",
  formTitle = "Request a call back",
}: contactProps) => {
  const ContactForm = () => (
    <form onSubmit={() => console.log("submitted")}>
      <p className="para-md">{formTitle}</p>
      {inputBox.length > 0 &&
        inputBox.map((doc, ind) => <Input key={ind} {...doc} />)}
      <Button {...button} />
    </form>
  );

  const ContactDetails = () => (
    <div className="details">
      <p className="h4">{title}</p>
      <p className="para-md">{body}</p>
      {details.length > 0 &&
        details.map((doc, ind) => (
          <Link href={doc.link} key={ind} className="data">
            <p className="para-lg">
              <span className="material-icons-round">
                {doc.label.toLowerCase() == 'address' ? 'location_on' : doc.label.toLowerCase()}
              </span>
              {doc.label} :
            </p>
            <p className="para-md">{doc.value}</p>
          </Link>
        ))}
    </div>
  );

  return (
    <div className={`contact`}>
      <div className="container">
        <div className="left" style={{ width: "50%" }}>
          {formAlignment === "left" ? <ContactForm /> : <ContactDetails />}
        </div>
        <div className="right" style={{ width: "50%" }}>
          {formAlignment === "right" ? <ContactForm /> : <ContactDetails />}
        </div>
      </div>
    </div>
  );
};
