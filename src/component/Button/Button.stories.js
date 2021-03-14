import React from 'react';

import Button from './Button';

const story = {
  title: 'UInator/Button',
  component: Button,
};

export default story

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Inverted = Template.bind({});
Inverted.args = {
  label: 'Button',
  type: "inverted"
};

export const Colored = Template.bind({});
Colored.args = {
  label: 'Button',
  type: "green"
};

