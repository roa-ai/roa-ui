import React from 'react';
import styled, { css } from 'styled-components';

import * as theme from '../../shared/styles';
import Ripple from '../Ripple';

type VariantTypes = 'text' | 'outlined' | 'contained';

export interface IProps {
  /** 타입 */
  variant: VariantTypes;
  /** 상태 */
  disabled: boolean;
  /** 아이콘 */
  icon?: React.ReactNode;
  /** 내용 */
  text: string;
  /** 클릭했을 때 호출할 함수 */
  onClick: () => void;
}

/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
const Button: React.FC<IProps> = ({ variant = 'text', disabled = false, icon, text, onClick }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {icon && <Icon>{icon}</Icon>}
      {text}
      <Ripple />
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant?: VariantTypes }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.shape.r8};
  border: 1px solid transparent;
  padding: 0 ${theme.spacing.s16};
  height: 40px;
  font-size: ${theme.typography.size.bt1}px;
  font-weight: ${theme.typography.weight.bold};
  letter-spacing: -0.5px;
  line-height: 17px;
  color: ${theme.color.primary};
  transition: all 250ms;
  overflow: hidden;

  ${p =>
    p.variant === 'text' &&
    css`
      :disabled {
        color: rgba(31, 31, 32, 0.4);
        cursor: not-allowed;
      }
      :hover {
        background: rgba(2, 6, 228, 0.1);
      }
      :focus {
        background: rgba(2, 6, 228, 0.6);
      }
    `}
  ${p =>
    p.variant === 'outlined' &&
    css`
      border-color: ${theme.color.primary};
      color: ${theme.color.primary};
      :disabled {
        border-color: rgba(31, 31, 32, 0.4);
        color: rgba(31, 31, 32, 0.4);
        cursor: not-allowed;
      }
      :hover {
        background: rgba(2, 6, 228, 0.1);
      }
      :focus {
        background: rgba(2, 6, 228, 0.6);
      }
    `}
  ${p =>
    p.variant === 'contained' &&
    css`
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      box-shadow: 0px 1px 2px #9e9e9e;
      :disabled {
        background-color: rgba(31, 31, 32, 0.1);
        color: rgba(31, 31, 32, 0.4);
        cursor: not-allowed;
      }
      :hover {
        box-shadow: 1px 2px 4px #9e9e9e;
      }
      :focus {
        background-color: #6200ee;
      }
    `}
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing.s8};
  svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    fill: currentColor;
    flex-shrink: 0;
    user-select: none;
  }
`;

export default Button;
