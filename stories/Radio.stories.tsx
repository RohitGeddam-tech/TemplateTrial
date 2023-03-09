import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "../Components/molecules/Radio/Radio";

export default {
  title: "Molecule/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} />
);

// Size

export const Size = Template.bind({});
Size.args = {
  size: "small",
};

//state

export const state = Template.bind({});
// state.storyName = "You can add custom state here";
state.args = {
  state: "disabled",
};