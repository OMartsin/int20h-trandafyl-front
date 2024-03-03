interface PrevButtonProps {
  onClick: () => void;
}

const PrevButton: React.FC<PrevButtonProps> = ({ onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "black",
        border: "none",
        borderRadius: "8px",
        padding: "9px 16px",
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Назад
    </button>
  );
};

export default PrevButton;
