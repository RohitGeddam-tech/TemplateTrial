import Head from "next/head";
import { Button } from "../Components/molecules/Button/Button";
import { Text } from "../Components/Atoms/Text/Text";
import Input from "../Components/molecules/Input/Input";
import { useState } from "react";
import { Fab } from "../Components/molecules/Fab/Fab";
import { Checkbox } from "../Components/molecules/Checkbox/Checkbox";
import { Radio } from "../Components/molecules/Radio/Radio";

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
  return (
    <>
      <Head>
        <title>Storybook experiment</title>
        <meta name="description" content="Being tested using storybook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button state="default" Type="ghost" text={true} size="small" />
      <Fab state="default" Type="ghost" size="small" />
      <Text />
      <span className="material-icons">face</span>
      <span className="material-icons-outlined">account_circle</span>
      <span className="material-icons">arrow_forward</span>
      <Checkbox />
      <Radio />
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
