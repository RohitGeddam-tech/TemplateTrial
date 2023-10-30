import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Components/molecules/Button/Button";

export default {
  title: "Molecule/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

// Size

export const Size = Template.bind({});
Size.args = {
  size: "small",
};

// label

export const label = Template.bind({});
label.args = {
  cta_title: "Proceed",
};

//type

export const type = Template.bind({});
type.storyName = "Types";
type.args = {
  cta_type: "primary",
};

//state

// export const state = Template.bind({});
// // state.storyName = "You can add custom state here";
// state.args = {
//   state: "disabled",
// };

//iconAlignment

export const iconAlignment = Template.bind({});
iconAlignment.storyName = "Trailing Icon";
iconAlignment.args = {
  cta_icon_alignment: "trailing",
};