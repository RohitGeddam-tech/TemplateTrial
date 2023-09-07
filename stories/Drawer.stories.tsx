import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Drawer } from "../Components/molecules/Drawer/Drawer";

export default {
  title: "Molecule/Drawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "single",
};

// body

export const body = Template.bind({});
body.args = {
  body: "body",
};

// subtitle

export const subtitle = Template.bind({});
subtitle.args = {
  subtitle: "label",
};


// placement

export const placement = Template.bind({});
placement.args = {
  placement: 'bottom',
};

// show label

export const showLabel = Template.bind({});
showLabel.args = {
  showLabel: true,
};

// show subtitle

export const showSubtitle = Template.bind({});
showSubtitle.args = {
  showSubtitle: true,
};

// first button

export const firstButton = Template.bind({});
firstButton.args = {
  firstButton: "secondary",
};

// second button

export const secondButton = Template.bind({});
secondButton.args = {
  secondButton: "danger",
};

// icon

export const icon = Template.bind({});
icon.args = {
  icon: false,
};

// footer divider

export const footerDivider = Template.bind({});
footerDivider.args = {
  footerDivider: false,
};

// header divider

export const headerDivider = Template.bind({});
headerDivider.args = {
  headerDivider: false,
};