import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Avatar, { IProps } from './Avatar';

export default {
  title: 'Design System/Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<IProps> = args => <Avatar {...args} />;

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  variant: 'image',
} as IProps;

export const TextAvatar = Template.bind({});
TextAvatar.args = {
  variant: 'text',
  text: '로',
} as IProps;
