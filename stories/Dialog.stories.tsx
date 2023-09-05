import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dialog } from "../Components/molecules/Dialog/Dialog";

export default {
  title: "Molecule/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

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


// size

export const size = Template.bind({});
size.args = {
  size: 'medium',
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