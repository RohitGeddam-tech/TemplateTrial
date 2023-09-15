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
import { Dialog } from "../Components/molecules/Dialog/Dialog";
import { Drawer } from "../Components/molecules/Drawer/Drawer";
import { Search } from "../Components/molecules/Search/Search";
import { Banner } from "../Components/organism/Banner";
import Carousel from "../Components/molecules/Carousel";
import { Navbar } from "../Components/organism/Navbar";
import { About } from "../Components/organism/About";

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

  const menu = [
    {
      label: "link",
      active: false,
    },
    {
      label: "link",
      active: true,
    },
    {
      label: "link",
      active: false,
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
      <Navbar menu={menu} />
      <div style={{ marginTop: "81px" }}>
        <Carousel slidesToShow={1} arrow={true} dots={true}>
          <Banner opacity="full" />
          <Banner />
          <Banner opacity="no" alignment="left" />
          <Banner opacity="no" alignment="center" />
        </Carousel>
      </div>
      <About
        imageAlignment="right"
        title="TITLE"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
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
            type={
              doc.type === "start"
                ? "start"
                : doc.type === "end"
                ? "end"
                : "middle"
            }
            size={
              doc.size === "medium"
                ? "medium"
                : doc.size === "large"
                ? "large"
                : "small"
            }
            state={doc.state === "default" ? "default" : "disabled"}
            active={doc.active}
            text={doc.text}
            leadingIcon={doc.leadingIcon}
            trailingIcon={doc.trailingIcon}
          />
        ))}
      </div>
      <Tabs />
      <Dialog />
      {/* <Drawer placement="right" /> */}
      <Search />
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
