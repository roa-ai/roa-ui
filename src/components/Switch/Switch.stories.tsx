import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Switch, { IProps } from './Switch';

export default {
  title: 'Design System/Components/Switch',
  component: Switch,
} as Meta;

const Template: Story<IProps> = args => {
  const [isOn, setIsOn] = useState(args.isOn);

  const toggleSwitch = () => setIsOn(!isOn);

  return <Switch {...args} isOn={isOn} onToggleSwitch={toggleSwitch} />;
};

export const On = Template.bind({});
On.args = {
  isOn: true,
} as IProps;

export const DisabledOn = Template.bind({});
DisabledOn.args = {
  isOn: true,
  disabled: true,
} as IProps;

export const Off = Template.bind({});
Off.args = {
  isOn: false,
} as IProps;

export const DisabledOff = Template.bind({});
DisabledOff.args = {
  isOn: false,
  disabled: true,
} as IProps;
