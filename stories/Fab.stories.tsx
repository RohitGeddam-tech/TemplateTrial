import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fab } from "../Components/molecules/Fab/Fab";

export default {
  title: "Molecule/Fab",
  component: Fab,
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => (
  <Fab {...args} />
);

// Size

export const Size = Template.bind({});
Size.args = {
  size: "small",
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