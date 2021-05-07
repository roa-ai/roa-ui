import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import * as theme from '../../shared/styles';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export interface IProps {
  /** 활성화 여부 */
  isOn?: boolean;
  /** 비활성 여부 */
  disabled?: boolean;
  /** 클릭했을 때 호출할 함수 */
  onToggleSwitch: () => void;
}
/** `Switch`는 단일 설정의 상태를 켜거나 끕니다. */
const Switch: React.FC<IProps> = ({
  isOn = false,
  disabled = false,
  onToggleSwitch,
}) => {
  return (
    <StyledSwitch isOn={isOn} disabled={disabled} onClick={onToggleSwitch}>
      <Handle layout isOn={isOn} disabled={disabled} transition={spring} />
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div<{ isOn?: boolean; disabled?: boolean }>`
  display: flex;
  justify-content: flex-start;
  border-radius: 32px;
  padding: 3px;
  width: 40px;
  height: 24px;
  background-color: rgba(2, 6, 228, 0.1);
  cursor: pointer;
  ${p => p.isOn && `justify-content: flex-end;`}
  ${p =>
    p.disabled &&
    `
    background-color: rgba(31, 31, 32, 0.1);
    pointer-events: none;
    cursor: not-allowed;
  `}
`;

const Handle = styled(motion.div)<{ isOn?: boolean; disabled?: boolean }>`
  border-radius: 9px;
  width: 18px;
  height: 18px;
  background-color: ${p =>
    p.isOn ? theme.color.primary : 'rgba(2, 6, 228, 0.2)'};
  ${p =>
    p.disabled &&
    `
    background-color: ${p.isOn ? 'rgba(31, 31, 32, 0.2)' : '#fff'};
  `}
`;

export default Switch;
