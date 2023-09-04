import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chips } from "../Components/molecules/Chips/Chips";

export default {
  title: "Molecule/Chips",
  component: Chips,
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "single",
};

// outline

export const outline = Template.bind({});
outline.args = {
  outline: true,
};

// active

export const active = Template.bind({});
active.args = {
  active: true,
};

// state

export const state = Template.bind({});
state.args = {
  state: "disabled",
};

// size

export const size = Template.bind({});
size.args = {
  size: "small",
};

// trailing icon

export const trailingIcon = Template.bind({});
trailingIcon.args = {
  trailingIcon: false,
};

// leading icon

export const leadingIcon = Template.bind({});
leadingIcon.args = {
  leadingIcon: false,
};
