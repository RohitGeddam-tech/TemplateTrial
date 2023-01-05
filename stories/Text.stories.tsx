import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: 'large',
};

