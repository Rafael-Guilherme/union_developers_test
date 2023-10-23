import "./ActionButton.scss";

interface ActionButtonProps {
  color: "blue" | "red";
  text: string;
  onClick: () => void;
  className?: string;
  //type: "button" | "submit"
}

const ActionButton = ({ color, text, onClick, className }: ActionButtonProps) => {
  const buttonClassName = `action-button ${color}-button ${className || ""}`

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ActionButton;
