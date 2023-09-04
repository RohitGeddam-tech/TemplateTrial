import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tabs } from "../Components/molecules/Tabs/Tabs";

export default {
  title: "Molecule/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "single",
};

// icon

export const icon = Template.bind({});
icon.args = {
  icon: true,
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
  type: "vertical",
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
