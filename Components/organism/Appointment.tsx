import React, { useEffect, useState } from "react";
import { Button } from "../molecules/Button/Button";
import Input from "../molecules/Input/Input";
import Textarea from "../molecules/Textarea/Textarea";
import axios from "axios";
// import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

export const Appointment = ({ setOpen }: any) => {
  const [load, setLoad] = useState<any>(false);
  const [state, setState] = useState<any>([]);
  const [formInfo, setFormInfo] = useState<any>({});
  const [success, setSuccess] = useState<any>(false);

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
      .post(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, data)
      .then((res) => res);
    if (response?.status === 200) {
      setLoad(true);
      setFormInfo({
        ...response.data.data.bookAppointmentForm.data.attributes.form,
      });
    }
  }

  useEffect(() => {
    !load && fetchData();
  }, [load]);

  async function submitData() {
    var val: any = {};
    for (let i = 0; i < state.length; i++) {
      const name = state[i].name;
      val[name] = state[i].value;
    }
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/appointment-bookings`, {
        data: { ...val, email: val.email_id },
      })
      .then((res) => {
        setSuccess(true);
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
        const value = {
          required: inputBox[i].required,
          label: inputBox[i].label,
          name: inputBox[i].name,
          value: "",
          error: "",
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
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{8,9})+$/.test(e.target.value) ||
        e.target.value.length === 0
      )
        data[indVal] = { ...data[indVal], value: e.target.value };
    } else {
      data[indVal] = { ...data[indVal], value: e.target.value };
    }
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
    <>
      {load && (
        <div className={`appointment`} style={{ backgroundColor: `white` }}>
          <div className="container">
            {success ? (
              <>
                <p className="h4" style={{ padding: "18px" }}>
                  Your Apppoitment has been
                  <br /> successfully registered.
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
              </>
            ) : (
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
                                maxDate={moment()
                                  .add(1, "months")
                                  .format("YYYY-MM-DD")}
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
                                error={
                                  doc.required && doc.error !== ""
                                    ? true
                                    : false
                                }
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
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
