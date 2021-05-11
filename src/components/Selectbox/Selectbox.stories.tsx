import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Selectbox, { IProps } from './Selectbox';

export default {
  title: 'Design System/Components/Selectbox',
  component: Selectbox,
} as Meta;

const Template: Story<IProps> = args => {
  const [value, setValue] = useState(args.value);
  function handleChange(currValue: string) {
    setValue(currValue);
  }
  return <Selectbox {...args} value={value} onChange={handleChange} />;
};

/** 기본 */
export const Default = Template.bind({});
Default.args = {
  value: 'roa',
  placeholder: '선택해주세유',
  options: [
    { label: '로아', value: 'roa' },
    { label: '토스', value: 'toss' },
    { label: '우하한형제들', value: 'woo' },
    { label: '당근마켓', value: 'daangeun' },
    { label: '카카오', value: 'kakao' },
    { label: '네이버', value: 'naver' },
    { label: '페이스북', value: 'facebook' },
    { label: '구글', value: 'google' },
  ],
} as IProps;

/** 값이 비어 있는 경우 */
export const BlankValue = Template.bind({});
BlankValue.args = {
  value: '',
  placeholder: '선택해주세유',
  options: [
    { label: '로아', value: 'roa' },
    { label: '토스', value: 'toss' },
    { label: '우하한형제들', value: 'woo' },
    { label: '당근마켓', value: 'daangeun' },
    { label: '카카오', value: 'kakao' },
    { label: '네이버', value: 'naver' },
    { label: '페이스북', value: 'facebook', disabled: true },
    { label: '구글', value: 'google', disabled: true },
  ],
} as IProps;

/** 비활성화인 경우 */
export const Disabled = Template.bind({});
Disabled.args = {
  value: 'roa',
  placeholder: '선택해주세유',
  options: [
    { label: '로아', value: 'roa' },
    { label: '토스', value: 'toss' },
    { label: '우하한형제들', value: 'woo' },
    { label: '당근마켓', value: 'daangeun' },
    { label: '카카오', value: 'kakao' },
    { label: '네이버', value: 'naver' },
    { label: '페이스북', value: 'facebook', disabled: true },
    { label: '구글', value: 'google', disabled: true },
  ],
  disabled: true,
} as IProps;

/** width값 변경 */
export const CustomWidth = Template.bind({});
CustomWidth.args = {
  value: 'roa',
  placeholder: '선택해주세유',
  options: [
    { label: '로아', value: 'roa' },
    { label: '토스', value: 'toss' },
    { label: '우하한형제들', value: 'woo' },
    { label: '당근마켓', value: 'daangeun' },
    { label: '카카오', value: 'kakao' },
    { label: '네이버', value: 'naver' },
    { label: '페이스북', value: 'facebook', disabled: true },
    { label: '구글', value: 'google', disabled: true },
  ],
  width: '300px',
} as IProps;
