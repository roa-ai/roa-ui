import { css } from 'styled-components';

import { SizeType } from './Badge';

const countWidthHeight: { [key in SizeType]: number } = {
  default: 20,
  small: 16,
};
export const countSizeStyle = (size: SizeType) => {
  const widthHeight = countWidthHeight[size];

  return css`
    border-radius: ${widthHeight / 2}px;
    min-width: ${widthHeight}px;
    height: ${widthHeight}px;
    line-height: ${widthHeight}px;
  `;
};
