import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home } from "./Home";

export default {
  title: "Example/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Small = Template.bind({});
Small.args = {
  margin: "mx-3",
};

export const Medium = Template.bind({});
Medium.args = {
  margin: "mx-5",
};
