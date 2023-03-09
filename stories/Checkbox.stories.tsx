import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "../Components/molecules/Checkbox/Checkbox";

export default {
  title: "Molecule/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

// Size

export const Size = Template.bind({});
Size.args = {
  size: "small",
};

//type

export const type = Template.bind({});
type.storyName = "Types";
type.args = {
  type: "default",
};

//state

export const state = Template.bind({});
// state.storyName = "You can add custom state here";
state.args = {
  state: "disabled",
};
