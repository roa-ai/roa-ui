import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Badge, { IProps } from './Badge';
import keywordIcon from '../../assets/icons/keyword.svg';

export default {
  title: 'Design System/Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<IProps> = args => (
  <Badge {...args}>
    <div>
      <img src={keywordIcon} alt="logo" />
    </div>
  </Badge>
);

export const SmallBadge = Template.bind({});
SmallBadge.args = {
  count: 9,
  size: 'small',
} as IProps;

export const SmallBadgeOver9 = Template.bind({});
SmallBadgeOver9.args = {
  count: 17,
  size: 'small',
} as IProps;

export const CountUnder9 = Template.bind({});
CountUnder9.args = {
  count: 5,
  size: 'default',
} as IProps;

export const CountOver9 = Template.bind({});
CountOver9.args = {
  count: 17,
  size: 'default',
} as IProps;
