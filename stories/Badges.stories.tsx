import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badges } from "../Components/molecules/Badges/Badges";

export default {
  title: "Molecule/Badges",
  component: Badges,
} as ComponentMeta<typeof Badges>;

const Template: ComponentStory<typeof Badges> = (args) => <Badges {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "5",
  type: "single digit",
};

// state

export const state = Template.bind({});
state.args = {
  state: "default",
};

// type

export const type = Template.bind({});
type.args = {
  type: "single digit",
  label: "5",
};

// colors

export const colors = Template.bind({});
colors.args = {
  colors: "subtle",
};