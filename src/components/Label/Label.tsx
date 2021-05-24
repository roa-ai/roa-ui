import React from 'react';
import styled from 'styled-components';

import * as theme from '../../shared/styles';

export interface IProps {
  /** 라벨에 들어갈 내용 */
  text: string;
  /** 클릭했을 때 호출할 함수 */
  onClick?: () => void;
}

/** `Label` 컴포넌트는 라벨로 내용을 표시할 때 사용됩니다. */
const Label: React.FC<IProps> = ({ text, onClick }) => {
  return <StyledLabel onClick={onClick}>{text}</StyledLabel>;
};

const StyledLabel = styled.span`
  padding: 8px 16px;
  border: 1px solid ${theme.color.primary};
  color: ${theme.color.primary};
  border-radius: 50px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.25px;
  text-align: left;
`;

export default Label;
