import "./CardButton.scss";

interface ButtonProps {
  text: string;
}

const CardButton: React.FC<ButtonProps> = ({ text }) => {
  return <button className="button">{text}</button>;
};

export default CardButton;
