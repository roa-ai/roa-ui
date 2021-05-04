import React from "react";
declare type VariantTypes = "text" | "contained" | "outlined";
declare type ColorTypes = "default" | "primary" | "secondary";
declare type SizeTypes = "small" | "medium" | "large";
export interface IProps {
    /** 내용 */
    children: React.ReactNode;
    /** 타입 */
    variant: VariantTypes;
    /** 색상 */
    color: ColorTypes;
    /** 사이즈 */
    size: SizeTypes;
    /** 상태 */
    disabled: boolean;
    /** 클릭했을 때 호출할 함수 */
    onClick: () => void;
}
/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
declare const Button: React.FC<IProps>;
export default Button;
