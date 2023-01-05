import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonTrial } from "../Components/Button/ButtonTrial";

// const data = {
//   size: { Small: "sm", Medium: "md", Large: "lg" },
// };

export default {
  title: "Example/ButtonTrial",
  component: ButtonTrial,
} as ComponentMeta<typeof ButtonTrial>;

const Template: ComponentStory<typeof ButtonTrial> = (args: any) => (
  <ButtonTrial {...args} />
);

// Size

export const Size = Template.bind({});
Size.args = {
  size: "sm",
};

// label

export const label = Template.bind({});
label.args = {
  label: "Proceed",
};

// width

export const width = Template.bind({});
width.args = {
  width: 30,
};

// height

export const height = Template.bind({});
height.args = {
  height: 30,
};

//styles

export const styles = Template.bind({});
styles.storyName = "custom styles";
styles.args = {
  styles: { fontSize: "32px" },
};

//opt

export const opt = Template.bind({});
opt.storyName = "Options";
opt.args = {
  opt: "normal",
};

//variations

export const variations = Template.bind({});
// variations.storyName = "You can add custom variations here";
variations.args = {
  variations: "normal",
};

//view

export const view = Template.bind({});
view.storyName = "various arrow view";
view.args = {
  view: "onlyLabel",
};