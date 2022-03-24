import React from 'react';
import styled from 'styled-components';

import * as theme from '../../shared/styles';
import IconAvatar from '../Icons/IconAvatar';

type VariantTypes = 'image' | 'text';

export interface IProps {
  // 아바타에 들어갈 상태
  /** 타입 */
  variant?: VariantTypes;
  /** 컬러 */
  color?: string;
  /** 텍스트 */
  text?: string;
}

/** `Avatar` 를 통해 사용자를 보여줍니다.*/
const Avatar: React.FC<IProps> = ({
  variant = 'image',
  color = 'rgba(31, 31, 32, 0.2)',
  text = '로',
}) => {
  return (
    <div>
      {variant === 'image' ? (
        <IconAvatar color={color} />
      ) : (
        <TextAvatar color={color}>{text}</TextAvatar>
      )}
    </div>
  );
};

export default Avatar;

const TextAvatar = styled.div<{ color?: string }>`
  padding-top: 2px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${p => p.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`;
