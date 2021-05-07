import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { IProps } from './Radio';

export default {
  title: 'Design System/Components/Radio',
  component: Radio,
} as Meta;

const Template: Story<IProps> = args => {
  const [gender, setGender] = useState('male');
  function handleChange() {
    setGender(prev => (prev === 'male' ? 'female' : 'male'));
  }
  return (
    <>
      <Radio name="male" checked={gender === 'male'} onChange={handleChange} />
      <Radio
        name="female"
        checked={gender === 'female'}
        onChange={handleChange}
      />
    </>
  );
};

export const EnabledSelected = Template.bind({});
EnabledSelected.args = {
  name: 'male',
  checked: true,
} as IProps;

export const EnabledUnselected = Template.bind({});
EnabledUnselected.args = {
  name: 'radio-2',
  checked: false,
} as IProps;
