import React, { useEffect, useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import { InputProps } from "../molecules/Input/Utils";
import Input from "../molecules/Input/Input";
import Link from "next/link";
import Textarea from "../molecules/Textarea/Textarea";

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
  bgColor?: string;
}

export const Contact = ({
  button = { label: "button", Type: "primary", size: "small" },
  details = [],
  title = "Contact Us",
  body = "body",
  inputBox = [],
  formAlignment = "left",
  formTitle = "Request a call back",
  bgColor,
}: contactProps) => {
  const ContactForm = () => {
    // type === "number"
    //           ? e.target.value.length <= 10 &&
    //             (/^-?\d+\.?\d*$/.test(e.target.value) ||
    //               e.target.value.length === 0) &&
    //             handleChange : handleChange

    const [state, setState] = useState({});

    useEffect(() => {
      if (Object.keys(state).length === 0 && inputBox.length > 0) {
        var val: any = {};
        for (let i = 0; i < inputBox.length; i++) {
          const name = inputBox[i].label || "label";
          val[name] = "";
        }
        // console.log(val);
        setState(val);
      }
    }, [state]);

    const handleChange = (e: any) => {
      var data: any = { ...state };
      var name = e.target.name || "label";
      data[name] = e.target.value;
      setState(data);
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(state);
        }}
      >
        <p className="para-md">{formTitle}</p>
        {inputBox.length > 0 &&
          inputBox.map((doc, ind) => (
            <div key={ind} style={{ width: "100%" }}>
              {doc.type === "textarea" ? (
                <Textarea label={doc.label} handleChange={handleChange} />
              ) : (
                <Input {...doc} handleChange={handleChange} />
              )}
            </div>
          ))}
        <Button {...button} />
      </form>
    );
  };

  const ContactDetails = () => (
    <div className="details">
      <p className="h4">{title}</p>
      <p className="para-md">{body}</p>
      {details.length > 0 &&
        details.map((doc, ind) => (
          <Link href={doc.link} key={ind} className="data">
            <p className="para-lg">
              <span className="material-icons-round">
                {doc.label.toLowerCase() == "address"
                  ? "location_on"
                  : doc.label.toLowerCase()}
              </span>
              {doc.label} :
            </p>
            <p className="para-md">{doc.value}</p>
          </Link>
        ))}
    </div>
  );

  return (
    <div
      className={`contact`}
      id="contact"
      style={
        bgColor ? { backgroundColor: bgColor } : { backgroundColor: `white` }
      }
    >
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
