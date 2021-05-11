import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import * as theme from '../../shared/styles';
import iconChevronDown from '../../assets/icons/chevron-down.svg';

/** Option Props */
interface IOptionProps {
  /** 옵션 라벨 */
  label: string;
  /** 옵션 값 */
  value: string;
  /** 비활성화 유무 */
  disabled?: boolean;
}

/** SelectBox Props */
export interface IProps {
  /** 선택된 값 */
  value: string;
  /** 빈텍스트 대체 값 */
  placeholder: string;
  /** 옵션 아이템들 */
  options: Array<IOptionProps>;
  /** 넓이 (예: 100px, auto, 100%) */
  width?: string;
  /** 비활성화 유무 */
  disabled?: boolean;
  /** 값을 변경할 경우 호출 될 함수 */
  onChange: (currValue: string) => void;
}

/** `SelectBox`는 아이템을 선택할 수 있습니다. */
const SelectBox: React.FC<IProps> = ({
  value,
  placeholder = '선택해주세요',
  options,
  width: passWidth = 'auto',
  disabled,
  onChange,
}) => {
  const selectEl = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<string>(passWidth);
  const [open, setOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    // 넓이가 auto인 경우 가장큰 문자열을 기준으로 값을 대체한다.
    if (width === 'auto') {
      const maxOption = options.reduce(
        (prev, curr) => (prev.value.length > curr.value.length ? prev : curr),
        { value: '' }
      );
      setWidth(`${maxOption.value.length * 20}px`);
    }
  }, [width]);

  function getSelectedLabel() {
    return options.find(option => option.value === value)?.label ?? value;
  }

  function handleOpen() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    if (selectEl.current !== null) selectEl.current.blur();
    setFocused(false);
    setOpen(false);
  }

  function handleClickOption(val: string) {
    onChange(val);
    handleBlur();
  }

  return (
    <Select
      ref={selectEl}
      tabIndex={0}
      width={width}
      focused={focused}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Selection disabled={disabled} noValue={!value} onClick={handleOpen}>
        <span>{value ? getSelectedLabel() : placeholder}</span>
        {open ? (
          <img
            src={iconChevronDown}
            alt="arrow-up"
            width="18px"
            height="11px"
          />
        ) : (
          <img
            src={iconChevronDown}
            alt="arrow-down"
            width="18px"
            height="11px"
          />
        )}
      </Selection>
      {open && (
        <Options>
          {options.map(option => (
            <Option
              key={option.value}
              selected={option.value === value}
              disabled={option.disabled}
              onClick={() => handleClickOption(option.value)}
            >
              {option.label}
            </Option>
          ))}
        </Options>
      )}
    </Select>
  );
};

const Select = styled.div<{
  width: string;
  focused: boolean;
  disabled?: boolean;
}>`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid ${theme.color.primary};
  width: ${p => p.width};
  ${p =>
    p.disabled &&
    `
    border-color: rgba(31, 31, 32, 0.4);
    background-color: rgba(51, 51, 51, 0.3);
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  `};
`;
const Selection = styled.div<{ disabled?: boolean; noValue: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 40px;
  font-size: ${theme.typography.size.b2}px;
  line-height: 22px;
  letter-spacing: -0.25px;
  color: ${theme.color.primary};
  cursor: pointer;
  ${p =>
    p.disabled &&
    `
    color: ${theme.color.gray};
    img {
      filter: grayscale(1);
      opacity: 0.7;
    }
  `};
  ${p => p.noValue && `color: rgba(31, 31, 32, 0.8);`};
  span {
    height: 20px;
  }
`;
const Options = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  border-radius: 8px;
  border: 1px solid rgba(31, 31, 32, 0.1);
  padding: 5px 0;
  max-height: 252px;
  background-color: #fff;
  overflow-y: auto;
  z-index: 1;
`;
const Option = styled.div<{ selected?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 40px;
  font-size: ${theme.typography.size.b2}px;
  line-height: 22px;
  letter-spacing: -0.25px;
  color: rgba(31, 31, 32, 0.8);
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  ${p => p.selected && `background-color: rgba(2, 6, 228, 0.04);`};
  ${p =>
    p.disabled &&
    `
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

export default SelectBox;
