import React from "react";
import { motion } from "framer-motion";

export interface IProps {
  /** 버튼 텍스트 */
  text: string;
  /** 클릭했을 때 호출할 함수 */
  onClick: () => void;
}
/** `MotionButton` 기존 Button 컴포넌트에 에니메이션을 부각시켰습니다. */
const MotionButton: React.FC<IProps> = ({ text, onClick }) => {
  function handleClick() {
    onClick();
  }

  return (
    <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={handleClick}>
      {text}
    </motion.button>
  );
};

export default MotionButton;
