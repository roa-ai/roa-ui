import React from "react";
export interface IProps {
    /** 버튼 텍스트 */
    text: string;
    /** 클릭했을 때 호출할 함수 */
    onClick: () => void;
}
/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
declare const Button: React.FC<IProps>;
export default Button;
