import React from "react";
import styles from "./NextButton.module.css";

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "white",
        border: "none",
        borderRadius: "8px",
        padding: "9px 16px",
        color: "black",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Далі
    </button>
  );
};

export default NextButton;
