import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { IProps } from './TextField';
import iconCancel from '../../assets/icons/cancel.svg';

export default {
  title: 'Design System/Components/TextField',
  component: TextField,
} as Meta;

const Template: Story<IProps> = args => {
  const [value, setValue] = useState(args.value);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleDeleteValue() {
    setValue('');
  }

  return (
    <TextField
      {...args}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <button aria-label="reset" onClick={handleDeleteValue}>
            <img src={iconCancel} alt="clear" width="20" height="20" />
          </button>
        ),
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '이름을 입력해주세요',
} as IProps;

export const Filled = Template.bind({});
Filled.args = {
  placeholder: '이름을 입력해주세요',
  value: '로아',
} as IProps;

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '이름을 입력해주세요',
  value: '로아',
  disabled: true,
} as IProps;

const ErrorTemplate: Story<IProps> = args => {
  const [value, setValue] = useState(args.value);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <TextField {...args} value={value} onChange={handleChange} />;
};
export const Error = ErrorTemplate.bind({});
Error.args = {
  placeholder: '이름을 입력해주세요',
  value: '로아',
  isError: true,
} as IProps;
