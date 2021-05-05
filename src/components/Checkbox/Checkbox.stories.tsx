import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { IProps } from './Checkbox';

export default {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<IProps> = args => {
  const [isChecked, setIsChecked] = useState(args.checked);
  function handleChange() {
    setIsChecked(prev => !prev);
  }
  return <Checkbox {...args} checked={isChecked} onChange={handleChange} />;
};

export const EnabledSelected = Template.bind({});
EnabledSelected.args = {
  name: 'checkbox-1',
  checked: true,
} as IProps;

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  name: 'checkbox-1',
  checked: true,
  disabled: true,
} as IProps;

export const EnabledUnselected = Template.bind({});
EnabledUnselected.args = {
  name: 'checkbox-2',
  checked: false,
} as IProps;

export const DisabledUnselected = Template.bind({});
DisabledUnselected.args = {
  name: 'checkbox-2',
  checked: false,
  disabled: true,
} as IProps;
