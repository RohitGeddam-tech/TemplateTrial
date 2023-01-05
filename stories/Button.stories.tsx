import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Components/Button";

// const data = {
//   size: { Small: "sm", Medium: "md", Large: "lg" },
// };

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

// Size

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

// for (const [key, values] of Object.entries(data.size)) {
//   key.args = {
//     size: values,
//   };
// }

// Color

export const primary = Template.bind({});
export const secondary = Template.bind({});
export const success = Template.bind({});
export const danger = Template.bind({});
export const info = Template.bind({});
export const warning = Template.bind({});
export const light = Template.bind({});
export const dark = Template.bind({});
export const link = Template.bind({});

primary.args = {
  color: "primary",
};

secondary.args = {
  color: "secondary",
};

success.args = {
  color: "success",
};

danger.args = {
  color: "danger",
};

info.args = {
  color: "info",
};

warning.args = {
  color: "warning",
};

light.args = {
  color: "light",
};

dark.args = {
  color: "dark",
};

link.args = {
  color: "link",
};

// const data = [
//   secondary,
//   success,
//   info,
//   warning,
//   light,
//   dark,
//   link,
//   danger,
// ];

// for (let i = 0; i < data.length; i++) {
//   data[i].args = {
//     color: `${data[i]}`,
//   };
// }

// .map(
//   (doc) =>
//     (doc.args = {
//       color: `${doc}`,
//     })
// );

{
  /* Label */
}

export const label = Template.bind({});
label.storyName = "You can change label here";
label.args = {
  label: "Label",
};

{
  /* Outline */
}

export const outline = Template.bind({});
outline.storyName = "You can change outline here";
outline.args = {
  outline: true,
};

{
  /* disabled */
}

export const disabled = Template.bind({});
disabled.storyName = "You can change disabled here";
disabled.args = {
  disabled: true,
};

{
  /* type */
}

export const type = Template.bind({});
type.storyName = "You can change type here";
type.args = {
  type: "button",
};

{
  /* active */
}

export const active = Template.bind({});
active.storyName = "You can change active here";
active.args = {
  active: true,
};

{
  /* styles */
}

export const styles = Template.bind({});
styles.storyName = "You can add custom styles here";
styles.args = {
  styles: { fontSize: "32px" },
};

{
  /* arrowFirst */
}

export const arrowFirst = Template.bind({});
arrowFirst.storyName = "You can change arrowFirst here";
arrowFirst.args = {
  arrowFirst: true,
  arrow: true,
};

{
  /* arrowLast */
}

export const arrowLast = Template.bind({});
arrowLast.storyName = "You can change arrowLast here";
arrowLast.args = {
  arrowLast: true,
  arrow: true,
};

{
  /* onlyLabel */
}

export const onlyLabel = Template.bind({});
onlyLabel.storyName = "You can change onlyLabel here";
onlyLabel.args = {
  onlyLabel: true,
  arrow: false,
};

{
  /* onlyArrow */
}

export const onlyArrow = Template.bind({});
onlyArrow.storyName = "You can change onlyArrow here";
onlyArrow.args = {
  onlyLabel: false,
  arrow: true,
};