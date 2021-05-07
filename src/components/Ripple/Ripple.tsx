import React, { useState } from 'react';
import styled from 'styled-components';

import useDebouncedRippleCleanUp from './useDebouncedRippleCleanUp';

interface IRipple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface IProps {
  duration?: number;
  color?: string;
}

const Ripple: React.FC<IProps> = ({ duration = 850, color = '#fff' }) => {
  const [rippleArray, setRippleArray] = useState<IRipple[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent) => {
    console.log('ripple');
    const rippleContainer = event.currentTarget.getBoundingClientRect();

    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const id = Date.now();
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = { id, x, y, size };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map(ripple => (
          <span
            key={ripple.id}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
    </RippleContainer>
  );
};

const RippleContainer = styled.div<{ duration: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${props => props.color};
    animation-name: ripple;
    animation-duration: ${props => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export default Ripple;
