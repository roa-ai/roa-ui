import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Label, { IProps } from './Label';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Components/Label',
  component: Label,
} as Meta;

const Template: Story<IProps> = args => {
  return <Label {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: '미디어',
  onClick: action('onClick'),
} as IProps;
