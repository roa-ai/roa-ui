import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import IconButton, { IProps } from './IconButton';

export default {
  title: 'Design System/Components/IconButton',
  component: IconButton,
} as Meta;

const WhiteIcon = () => (
  <svg viewBox="0 0 64 64">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 38.8132L45 46.0808V17H19V46.0808L32 38.8132ZM32 45.6872L46.5361 53.8136C48.5358 54.9315 51 53.486 51 51.195V14C51 12.3431 49.6569 11 48 11H16C14.3431 11 13 12.3431 13 14V51.195C13 53.486 15.4642 54.9315 17.4639 53.8135L32 45.6872Z"
    />
  </svg>
);

const PrimaryIcon = () => (
  <svg viewBox="0 0 64 64">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 38.8132L45 46.0808V17H19V46.0808L32 38.8132ZM32 45.6872L46.5361 53.8136C48.5358 54.9315 51 53.486 51 51.195V14C51 12.3431 49.6569 11 48 11H16C14.3431 11 13 12.3431 13 14V51.195C13 53.486 15.4642 54.9315 17.4639 53.8135L32 45.6872Z"
    />
  </svg>
);

const Template: Story<IProps> = args => <IconButton {...args} />;

export const Text = Template.bind({});
Text.args = {
  icon: <PrimaryIcon />,
  onClick: action('onClick'),
} as IProps;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  icon: <PrimaryIcon />,
  onClick: action('onClick'),
} as IProps;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  icon: <WhiteIcon />,
  onClick: action('onClick'),
} as IProps;

export const DisabledContained = Template.bind({});
DisabledContained.args = {
  disabled: true,
  variant: 'contained',
  icon: <WhiteIcon />,
  onClick: action('onClick'),
} as IProps;
