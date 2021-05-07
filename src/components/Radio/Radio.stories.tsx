import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { IProps } from './Radio';

export default {
  title: 'Design System/Components/Radio',
  component: Radio,
} as Meta;

const Template: Story<IProps> = ({ name, disabled }) => {
  const [gender, setGender] = useState(name);
  function handleChange() {
    setGender(prev => (prev === 'male' ? 'female' : 'male'));
  }
  return (
    <>
      <Radio
        name="male"
        checked={gender === 'male'}
        disabled={disabled}
        onChange={handleChange}
      />
      <Radio
        name="female"
        checked={gender === 'female'}
        disabled={disabled}
        onChange={handleChange}
      />
    </>
  );
};

export const Enabled = Template.bind({});
Enabled.args = {
  name: 'male',
  checked: true,
  disabled: false,
} as IProps;

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'male',
  checked: false,
  disabled: true,
} as IProps;
