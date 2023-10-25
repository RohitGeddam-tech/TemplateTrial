import React, { useEffect, useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import { InputProps } from "../molecules/Input/Utils";
import Input from "../molecules/Input/Input";
import Link from "next/link";
import Textarea from "../molecules/Textarea/Textarea";
import axios from "axios";

interface contactProps {
  formAlignment?: "left" | "right";
  button?: ButtonProps;
  title?: string;
  body?: string;
  details?: Array<{
    title: string;
    value: string;
    type: string;
    icon?: string;
    icon_type?: string;
    icon_color?: string;
    title_color?: string;
  }>;
  formTitle?: string;
  bgColor?: string;
  description_color?: string;
  title_color?: string;
}

export const Contact = ({
  button = { cta_title: "button", cta_type: "primary", size: "small" },
  details = [],
  title = "Contact Us",
  body = "body",
  formAlignment = "left",
  formTitle = "Request a call back",
  bgColor,
  title_color,
  description_color,
}: contactProps) => {
  const ContactForm = () => {
    const [state, setState] = useState<any>([]);
    const [formInfo, setFormInfo] = useState<any>({});

    async function fetchData() {
      const data = {
        query: `
      query{
        contactUsFrom {
          data {
            attributes {
              form {
                form_fields {
                  label
                  placeholder
                  name
                  required
                }
                buttons {
                  title
                  cta_action
                  type
                  icon_type
                  icon
                }
              }
            }
          }
        }
      }
      `,
      };
      const response = await axios
        .post("https://buildercms.aashirwadlab.co.in/graphql", data)
        .then((res) => res);
      // console.log(response.data.data);
      // return response.data.data;
      setFormInfo({
        ...response.data.data.contactUsFrom.data.attributes.form,
      });
    }
    useEffect(() => {
      Object.keys(formInfo).length === 0 && fetchData();
    }, [formInfo]);

    async function submitData() {
      var val: any = {};
      for (let i = 0; i < state.length; i++) {
        const name = state[i].name;
        val[name] = state[i].value;
      }
      const response = await axios
        .post("https://buildercms.aashirwadlab.co.in/api/contact-uses", {
          data: { ...val, email: val.email_id },
        })
        .then((res) => res);
      console.log(response.data.data);
    }

    useEffect(() => {
      if (
        state.length === 0 &&
        Object.keys(formInfo).length > 0 &&
        formInfo.form_fields.length > 0
      ) {
        const inputBox = formInfo.form_fields;
        var val: any = [];
        for (let i = 0; i < inputBox.length; i++) {
          // const name = inputBox[i].name || "label";
          // val[name] = "";
          const value = {
            required: inputBox[i].required,
            label: inputBox[i].label,
            name: inputBox[i].name,
            value: "",
          };
          val[i] = value;
        }
        // console.log(val);
        // console.log(val[val.findIndex((el: any) => el.name === "name")]);
        setState(val);
      }
    }, [state, formInfo]);

    const handleChange = (e: any) => {
      var data: any = [...state];
      var name = e.target.name;
      var indVal = data.findIndex((el: any) => el.name === name);
      if (name === "mobile_number") {
        if (
          e.target.value.length <= 10 &&
          (/^-?\d+\.?\d*$/.test(e.target.value) || e.target.value.length === 0)
        ) {
          // data[name] = e.target.value;
          data[indVal] = { ...data[indVal], value: e.target.value };
        }
      } else if (name === "email_id") {
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{8,9})+$/.test(
            e.target.value
          ) ||
          e.target.value.length === 0
        )
          data[indVal] = { ...data[indVal], value: e.target.value };
      } else {
        data[indVal] = { ...data[indVal], value: e.target.value };
      }
      // console.log(data);
      setState(data);
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(state);
          state.length > 0 && submitData();
        }}
      >
        {Object.keys(formInfo).length > 0 && (
          <>
            <p className="para-md">{formTitle}</p>
            {state.length > 0 &&
              state.map((doc: any, ind: number) => (
                <div key={ind} style={{ width: "100%" }}>
                  {doc.name === "message" ? (
                    <Textarea
                      label={doc.label}
                      required={doc.required}
                      handleChange={handleChange}
                      value={doc.value}
                    />
                  ) : (
                    <Input
                      required={doc.required}
                      label={doc.label}
                      name={doc.name}
                      handleChange={handleChange}
                      value={doc.value}
                    />
                  )}
                </div>
              ))}
            <Button
              cta_title={formInfo.buttons[0].title}
              cta_action={formInfo.buttons[0].cta_action}
              cta_icon={formInfo.buttons[0].icon}
              cta_icon_type={formInfo.buttons[0].icon_type}
              cta_type={formInfo.buttons[0].type}
            />
          </>
        )}
      </form>
    );
  };

  const ContactDetails = () => (
    <div className="details">
      <p
        className="h4"
        style={{
          color: title_color,
        }}
      >
        {title}
      </p>
      <p
        className="para-md"
        style={{
          color: description_color,
        }}
      >
        {body}
      </p>
      {details.length > 0 &&
        details.map((doc, ind) => (
          <>
            {doc.type === "address" ? (
              <div key={ind} className="data">
                <p className="para-lg">
                  <span
                    className={`material-icons-${doc.icon_type}`}
                    style={{ color: doc.icon_color }}
                  >
                    {doc.icon}
                  </span>
                  {doc.title} :
                </p>
                <p className="para-md">{doc.value}</p>
              </div>
            ) : (
              <Link
                href={
                  doc.type === "email"
                    ? `mailto:${doc.value}`
                    : `tel:${doc.value}`
                }
                key={ind}
                className="data"
              >
                <p className="para-lg" style={{ color: doc.title_color }}>
                  <span
                    className={`material-icons-${doc.icon_type}`}
                    style={{ color: doc.icon_color }}
                  >
                    {doc.icon}
                  </span>
                  {doc.title} :
                </p>
                <p className="para-md">{doc.value}</p>
              </Link>
            )}
          </>
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
