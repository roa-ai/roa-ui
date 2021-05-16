import React from 'react';
import styled from 'styled-components';

import * as theme from '../../shared/styles';

export interface IProps {
  /** Placeholder */
  placeholder?: string;
  /** Input 값 */
  value: string;
  /** 에러 상태 */
  isError?: boolean;
  /** 비활성 여부 */
  disabled?: boolean;
  /** Input 값이 변경되었을 때 호출할 함수 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Input 박스안 아이콘 배치 */
  InputProps?: {
    endAdornment?: React.ReactNode;
  };
}

/** `TextField` 를 통해 사용자는 텍스트를 입력하고 편집 할 수 있습니다. */
const TextField: React.FC<IProps> = ({
  placeholder,
  value,
  isError,
  disabled,
  onChange,
  InputProps,
}) => {
  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={value}
        isError={isError}
        disabled={disabled}
        onChange={onChange}
      />
      {InputProps && InputProps.endAdornment && value && !disabled && (
        <RightArea>{InputProps.endAdornment}</RightArea>
      )}
      {isError && (
        <RightArea>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 2.66667C8.63999 2.66667 2.66666 8.64001 2.66666 16C2.66666 23.36 8.63999 29.3333 16 29.3333C23.36 29.3333 29.3333 23.36 29.3333 16C29.3333 8.64001 23.36 2.66667 16 2.66667ZM17.3333 22.6667H14.6667V20H17.3333V22.6667ZM17.3333 17.3333H14.6667V9.33334H17.3333V17.3333Z"
              fill="#D93234"
            />
          </svg>
        </RightArea>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;
const Input = styled.input<{ isError?: boolean }>`
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid rgba(31, 31, 32, 0.4);
  height: 48px;
  font-size: ${theme.typography.size.b1}px;
  line-height: 32px;
  outline: none;
  transition: border 200ms;

  :hover {
    border-color: #1f1f20;
  }

  :active {
    border-color: #1f1f20;
  }

  :focus {
    border-color: #0206e4;
  }

  :disabled {
    border-color: rgba(31, 31, 32, 0.1);
    background-color: rgba(31, 31, 32, 0.1);
    cursor: not-allowed;
  }

  ${p => p.isError && 'border-color: #D93234'}
`;
const RightArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 14px;
`;

export default TextField;
