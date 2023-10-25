import React, { useEffect, useState } from "react";
import { Button } from "../molecules/Button/Button";
import Input from "../molecules/Input/Input";
import Textarea from "../molecules/Textarea/Textarea";
import axios from "axios";

export const Appointment = ({ setOpen }: any) => {
  const ContactForm = () => {
    const [state, setState] = useState<any>([]);
    const [formInfo, setFormInfo] = useState<any>({});

    async function fetchData() {
      const data = {
        query: `
      query{
        bookAppointmentForm {
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
      setFormInfo({
        ...response.data.data.bookAppointmentForm.data.attributes.form,
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
        .post("https://buildercms.aashirwadlab.co.in/api/appointment-bookings", {
          data: { ...val, email: val.email_id },
        })
        .then((res) => {
          setOpen(false);
          var val: any = [];
          for (let i = 0; i < state.length; i++) {
            const value = {
              required: state[i].required,
              label: state[i].label,
              name: state[i].name,
              value: "",
            };
            val[i] = value;
          }
          setState(val);
        });
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
          const value = {
            required: inputBox[i].required,
            label: inputBox[i].label,
            name: inputBox[i].name,
            value: "",
          };
          val[i] = value;
        }
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
      setState(data);
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          state.length > 0 && submitData();
        }}
        style={{ width: "100%" }}
      >
        {Object.keys(formInfo).length > 0 && (
          <>
            <p className="h4">
              Book Appointment{" "}
              <span
                className="material-icons-outlined"
                onClick={() => {
                  setOpen(false);
                  var val: any = [];
                  for (let i = 0; i < state.length; i++) {
                    const value = {
                      required: state[i].required,
                      label: state[i].label,
                      name: state[i].name,
                      value: "",
                    };
                    val[i] = value;
                  }
                  setState(val);
                }}
              >
                close
              </span>
            </p>
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

  return (
    <div className={`appointment`} style={{ backgroundColor: `white` }}>
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};
