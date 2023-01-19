import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '../Components/Text/Text';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// label

export const label = Template.bind({});
label.args = {
  label: "Label",
};

// headings

export const headings = Template.bind({});
headings.args = {
  headings: "h1",
};

// subTitle

export const subTitle = Template.bind({});
subTitle.args = {
  subTitle: "lg",
};

// body

export const body = Template.bind({});
body.args = {
  body:  "lg",
};

// caption

export const caption = Template.bind({});
caption.args = {
  caption: true,
};

// overline

export const overline = Template.bind({});
overline.args = {
  overline: true,
};
