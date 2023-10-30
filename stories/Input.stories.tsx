import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Components/molecules/Input/Input";

export default {
  title: "Molecule/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// Size

export const Size = Template.bind({});
Size.args = {
  size: "medium",
};

// State

export const state = Template.bind({});
state.args = {
  state: "disabled",
};

// required

export const required = Template.bind({});
required.args = {
  required: true,
};

// adornment

export const adornment = Template.bind({});
adornment.args = {
  adornment: true,
};

//trailingIcon

export const trailingIcon = Template.bind({});
trailingIcon.args = {
  trailingIcon: true,
};

//leadingIcon

export const leadingIcon = Template.bind({});
leadingIcon.args = {
  leadingIcon: true,
};

//text

export const text = Template.bind({});
text.args = {
  text: "new text",
};

//value

export const value = Template.bind({});
value.args = {
  value: "value",
};

//label

export const label = Template.bind({});
label.args = {
  label: "label",
};

//type

export const type = Template.bind({});
type.args = {
  type: "password",
};

// helperText

export const helperText = Template.bind({});
helperText.args = {
  helperText: "please fill the info.",
};

// characterCounter

export const characterCounter = Template.bind({});
characterCounter.args = {
  characterCounter: true,
};