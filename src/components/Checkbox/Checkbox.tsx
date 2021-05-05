import React from 'react';
import styled from 'styled-components';

import * as theme from '../../shared/styles';
import iconCheck from '../../assets/icons/check.svg';

export interface IProps {
  /** input 이름 */
  name: string;
  /** 텍스트 라벨 */
  label?: string;
  /** 체크 여부 */
  checked: boolean;
  /** 비활성 여부 */
  disabled?: boolean;
  /** 상태 변경시 호출 함수 */
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

/** `Checkbox`는 true/false를 기준으로 체크 여부를 확인합니다. */
const Checkbox: React.FC<IProps> = ({
  name,
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <Label>
      <Input
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <Text>{label}</Text>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  line-height: 24px;
`;
const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  opacity: 0;
`;
const Text = styled.span`
  margin: 0;
  padding-left: 30px;
  line-height: 24px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    cursor: pointer;
    overflow: hidden;
    content: '';
    transition: all 250ms;
  }

  ${Input}:not(:checked) + & {
    color: ${theme.color.label};
  }

  // disabled check & background
  ${Input}:disabled + &::before,
  ${Input}:disabled + &::after {
    cursor: not-allowed;
  }

  // check
  &::before {
    top: 6px;
    left: 4px;
    width: 17px;
    height: 12px;
    z-index: 1;

    // checked
    ${Input}:checked + & {
      background-image: url(${iconCheck});
      background-repeat: no-repeat;
      background-size: 17px 12px;
    }

    // not checked
    ${Input}:not(:checked) + & {
      background-color: none;
    }

    // disabled
    ${Input}:disabled + & {
      filter: brightness(0.7);
    }
  }

  // background
  &::after {
    top: 0;
    left: 0;
    display: inline-block;
    margin: 0;
    border-radius: 4px;
    width: 24px;
    height: 24px;

    // checked
    ${Input}:checked + & {
      border: 1px solid transparent;
      background-color: ${theme.color.primary};
    }

    // not checked
    ${Input}:not(:checked) + & {
      border: 1px solid rgba(31, 31, 32, 0.4);
      background-color: white;
    }

    // disabled
    ${Input}:not(:checked):disabled + & {
      border: 1px solid rgba(31, 31, 32, 0.2);
    }
    ${Input}:checked:disabled + & {
      border: 1px solid transparent;
    }
    ${Input}:disabled + & {
      background-color: rgba(31, 31, 32, 0.1);
    }
  }
`;

export default Checkbox;
