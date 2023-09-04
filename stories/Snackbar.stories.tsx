import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Snackbar } from "../Components/molecules/Snackbar/Snackbar";

export default {
  title: "Molecule/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => <Snackbar {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "single digit Snack Bar",
  lines: 1,
};

// lines

export const lines = Template.bind({});
lines.args = {
  label: "single digit Snack Bar single digit Snack Bar single digit Snack Bar",
  lines: 3,
};

// action

export const action = Template.bind({});
action.args = {
  label: "single digit single digit single digit",
  action: false,
};

// state

export const state = Template.bind({});
state.args = {
  state: "info",
};

// trailing icon

export const trailingIcon = Template.bind({});
trailingIcon.args = {
  trailingIcon: false,
};