import React from 'react';
import styled from 'styled-components';

import * as theme from '../../shared/styles';

export interface IProps {
  /** input 이름 */
  name: string;
  /** 체크 여부 */
  checked: boolean;
  /** 비활성 여부 */
  disabled?: boolean;
  /** 상태 변경시 호출 함수 */
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

/** `Radio`는 true/false를 기준으로 체크 여부를 확인합니다. */
const Radio: React.FC<IProps> = ({
  name,
  checked = false,
  disabled = false,
  onChange,
}) => {
  return (
    <Control>
      <Root>
        <Label>
          <Input
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
          />
          <Box>
            <Icon />
            <Circle
              checked={checked}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
            </Circle>
          </Box>
        </Label>
      </Root>
    </Control>
  );
};

const Control = styled.span`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
`;
const Root = styled.span`
  position: relative;
  flex: 0 0 auto;
  border-radius: 50%;
  padding: 9px;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: visible;
`;
const Label = styled.label`
  display: flex;
  align-items: inherit;
  justify-content: inherit;
  width: 100%;
`;
const Input = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  cursor: inherit;
  opacity: 0;
  z-index: 1;
`;
const Box = styled.span`
  position: relative;
  display: flex;
`;
const Icon = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
  border-radius: 50%;
  border: 1px solid rgba(31, 31, 32, 0.4);
  transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;
const Circle = styled.svg<{ checked: boolean }>`
  position: absolute;
  left: 0;
  display: inline-block;
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
  color: ${theme.color.primary};
  fill: currentColor;
  transition: transform 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${p => (p.checked ? 'scale(1)' : 'scale(0)')};
`;

export default Radio;
