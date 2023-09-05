import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "../Components/molecules/Toggle/Toggle";

export default {
  title: "Molecule/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "single",
};

// size

export const size = Template.bind({});
size.args = {
  size: 'medium',
};

// text

export const text = Template.bind({});
text.args = {
  text: true,
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

export const type = Template.bind({});
type.args = {
  type: "start",
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
