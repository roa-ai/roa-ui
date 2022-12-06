import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import { countSizeStyle } from './styles';

export type SizeType = 'small' | 'default';

export interface IProps {
  /** 스타일 */
  style?: CSSProperties;
  /** 클래스 */
  className?: string;
  /** 사이즈 */
  size: SizeType;
  /** 우상단 뱃지 */
  count?: number;
}

/** `Badge` 컴포넌트는 특정 엘리먼트의 우상단에 무언가를 표시할 때 사용합니다 */
const Badge: React.FC<IProps> = ({
  size = 'default',
  count,
  children,
  ...rest
}) =>
  count ? (
    <Container {...rest}>
      <Count size={size} wide={count > 9}>
        {count}
      </Count>
      {children}
    </Container>
  ) : (
    <>{children}</>
  );

const Container = styled.span`
  position: relative;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
`;
const Count = styled.sup<{ size: SizeType; wide: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: 100% 0%;
  transform: translate(50%, -50%);
  text-align: center;
  border: 1px solid #fff;
  ${p => countSizeStyle(p.size)}
  ${p =>
    p.wide &&
    css`
      padding: 0 6px;
    `}
  background-color: #ff4d4f;
  color: #fff;
  z-index: auto;
`;

export default Badge;
