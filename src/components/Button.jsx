import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({
  icon,
  color,
  bgColor,
  size,
  text,
  borderRadius,
  bgHoverColor,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button
      type="button"
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
      onClick={() => setIsClicked(initialState)}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
