import "./ActionButton.scss";

interface ActionButtonProps {
  color: "blue" | "red" | "gray";
  text: string;
  onClick?: () => void;
  className?: string;
  type: "button" | "submit"
}

const ActionButton = ({ color, text, onClick, type, className }: ActionButtonProps) => {
  const buttonClassName = `action-button ${color}-button ${className || ""}`

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default ActionButton;
