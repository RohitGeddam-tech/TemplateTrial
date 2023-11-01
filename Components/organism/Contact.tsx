import React, { useEffect, useState } from "react";
import { Button } from "../molecules/Button/Button";
// import Image from "next/image";
import { ButtonProps } from "../molecules/Button/Util";
import Input from "../molecules/Input/Input";
import Link from "next/link";
import Textarea from "../molecules/Textarea/Textarea";
import axios from "axios";
import moment from "moment";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
// import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

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
    const [success, setSuccess] = useState<any>(false);

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
        .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
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
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-uses`, {
          data: { ...val, email: val.email_id },
        })
        .then((res) => {
          setSuccess(true);
          var val: any = [];
          for (let i = 0; i < state.length; i++) {
            // const name = state[i].name || "label";
            // val[name] = "";
            const value = {
              required: state[i].required,
              label: state[i].label,
              name: state[i].name,
              value: "",
              error: "",
            };
            val[i] = value;
          }
          // console.log(val);
          // console.log(val[val.findIndex((el: any) => el.name === "name")]);
          setState(val);
        })
        .catch((err) => console.log(err));
      // console.log(response.data.data);
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
            error: "",
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

    const handleBlur = (e: any) => {
      var data: any = [...state];
      var name = e.target.name;
      var indVal = data.findIndex((el: any) => el.name === name);
      if (
        name !== "message" &&
        name !== "mobile_number" &&
        e.target.value === "" &&
        data[indVal].required
      ) {
        data[indVal] = {
          ...data[indVal],
          error: `please enter a valid ${data[indVal].label}`,
        };
      } else {
        data[indVal] = { ...data[indVal], error: `` };
      }
      if (name === "mobile_number" && data[indVal].required) {
        if (e.target.value.length < 10 || e.target.value === "") {
          // data[name] = e.target.value;
          data[indVal] = {
            ...data[indVal],
            error: "Please enter a valid mobile no.",
          };
        } else {
          data[indVal] = { ...data[indVal], error: `` };
        }
      }
      if (name === "message" && data[indVal].required) {
        if (e.target.value.length <= 20 || e.target.value === "") {
          data[indVal] = {
            ...data[indVal],
            error: "Minimum 20 words are required",
          };
        } else {
          data[indVal] = { ...data[indVal], error: `` };
        }
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
                      handleBlur={handleBlur}
                      helperText={doc.error}
                    />
                  ) : doc.name === "booking_time" ? (
                    <>
                      <KeyboardDateTimePicker
                        className="mui-date-picker"
                        label={`${doc.label}${doc.required ? "*" : ""}`}
                        // required={doc.required}
                        inputVariant="outlined"
                        ampm={true}
                        value={doc.value || null}
                        minDate={new Date()}
                        maxDate={moment().add(1, "months").format("YYYY-MM-DD")}
                        onChange={(date) => {
                          var data = [...state];
                          var indVal = data.findIndex(
                            (el: any) => el.name === "booking_time"
                          );
                          data[indVal] = {
                            ...data[indVal],
                            value: date,
                            error: "",
                          };
                          setState(data);
                        }}
                        error={doc.required && doc.error !== "" ? true : false}
                        helperText={
                          doc.required && doc.error !== "" && doc.error
                        }
                        format="dd-MM-yyyy hh:mm a"
                        autoOk={true}
                        hideTabs={true}
                        onBlur={(e) => {
                          var data = [...state];
                          var indVal = data.findIndex(
                            (el: any) => el.name === "booking_time"
                          );
                          console.log(e);
                          if (e.target.value === "") {
                            data[indVal] = {
                              ...data[indVal],
                              error: `please enter a valid date`,
                            };
                          } else {
                            data[indVal] = {
                              ...data[indVal],
                              error: ``,
                            };
                          }
                          setState(data);
                        }}
                      />
                    </>
                  ) : (
                    <Input
                      required={doc.required}
                      label={doc.label}
                      name={doc.name}
                      handleChange={handleChange}
                      value={doc.value}
                      handleBlur={handleBlur}
                      helperText={doc.error}
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
        {success && (
          <div className={`appointment`} style={{ backgroundColor: `white` }}>
            <div className="container">
              <p className="h4" style={{ padding: "18px" }}>
                Your message has been successfully received.
                <span
                  className="material-icons-outlined"
                  onClick={() => {
                    setSuccess(false);
                    var val: any = [];
                    for (let i = 0; i < state.length; i++) {
                      const value = {
                        required: state[i].required,
                        label: state[i].label,
                        name: state[i].name,
                        value: "",
                        error: "",
                      };
                      val[i] = value;
                    }
                    setState(val);
                  }}
                >
                  close
                </span>
              </p>
            </div>
          </div>
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
          <div key={ind}>
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
          </div>
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
