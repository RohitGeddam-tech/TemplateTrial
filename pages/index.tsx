import Head from "next/head";
import { Button } from "../Components/molecules/Button/Button";
import { Text } from "../Components/Atoms/Text/Text";
import Input from "../Components/molecules/Input/Input";
import { useState } from "react";
import { Fab } from "../Components/molecules/Fab/Fab";
import { Checkbox } from "../Components/molecules/Checkbox/Checkbox";
import { Radio } from "../Components/molecules/Radio/Radio";
import { Badges } from "../Components/molecules/Badges/Badges";
import Switch from "../Components/molecules/Switch";
import { Snackbar } from "../Components/molecules/Snackbar/Snackbar";
import { Chips } from "../Components/molecules/Chips/Chips";
import { Tabs } from "../Components/molecules/Tabs/Tabs";
import { Toggle } from "../Components/molecules/Toggle/Toggle";

export default function Home() {
  const handleChange = (e: any) => {
    // console.log("hello");
    setState(e.target.value);
  };
  const handleClear = (e: any) => {
    // console.log("hello");
    setState("");
  };
  const [state, setState] = useState("");

  const data = [
    {
      label: "label",
      type: "start",
      size: "medium",
      state: "default",
      active: true,
      text: false,
      leadingIcon: false,
      trailingIcon: false,
    },
    {
      label: "label",
      type: "middle",
      size: "medium",
      state: "default",
      active: false,
      text: false,
      leadingIcon: false,
      trailingIcon: false,
    },
    {
      label: "label",
      type: "end",
      size: "medium",
      state: "default",
      active: false,
      text: false,
      leadingIcon: false,
      trailingIcon: false,
    },
  ];
  return (
    <>
      <Head>
        <title>Storybook experiment</title>
        <meta name="description" content="Being tested using storybook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button state="default" Type="secondary" text={true} size="small" />
      <Fab state="default" Type="ghost" size="small" />
      <Text />
      <span className="material-icons">face</span>
      <span className="material-icons-outlined">account_circle</span>
      <span className="material-icons">arrow_forward</span>
      <Checkbox />
      <Radio />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((doc, ind) => (
          <Toggle
            key={ind}
            label={doc.label}
            type={doc.type}
            size={doc.size}
            state={doc.state}
            active={doc.active}
            text={doc.text}
            leadingIcon={doc.leadingIcon}
            trailingIcon={doc.trailingIcon}
          />
        ))}
      </div>
      <Tabs />
      <Badges />
      <Switch />
      <Snackbar />
      <Snackbar
        label="hello how do you do welcome to the my world that is heelo world"
        lines={4}
        state="info"
      />
      <Chips />
      <Chips
        label="new"
        state="default"
        size="large"
        active={true}
        outline={true}
      />
      <Input
        adornment={{ value: "suffix", text: "$" }}
        text="mobile"
        type="number"
        helperText={{ value: true, text: "helper text", helperIcon: true }}
        label="Mobile no.*"
        required={true}
        value={state}
        leadingIcon={true}
        handleChange={handleChange}
        state="success"
      />
      <Input
        adornment={{ value: "prefix", text: "Rs." }}
        size="medium"
        helperText={{ value: false, text: "helper text", helperIcon: true }}
        required={true}
        value={state}
        // leadingIcon={true}
        trailingIcon={true}
        handleChange={handleChange}
        handleClear={handleClear}
      />
    </>
  );
}
