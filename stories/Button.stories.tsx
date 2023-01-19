import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Components/Button/Button";

export default {
  title: "Example/Button",
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
  label: "Proceed",
};

//styles

export const styles = Template.bind({});
// styles.storyName = "custom styles";
styles.args = {
  styles: { fontSize: "32px" },
};

//type

export const type = Template.bind({});
type.storyName = "Types";
type.args = {
  Type: "primary",
};

//state

export const state = Template.bind({});
// state.storyName = "You can add custom state here";
state.args = {
  state: "disabled",
};

//trailingIcon

export const trailingIcon = Template.bind({});
trailingIcon.storyName = "Trailing Icon";
trailingIcon.args = {
  trailingIcon: true,
};

//leadingIcon

export const leadingIcon = Template.bind({});
leadingIcon.storyName = "leading Icon";
leadingIcon.args = {
  leadingIcon: true,
};

//text

export const text = Template.bind({});
text.storyName = "text";
text.args = {
  text: true,
};