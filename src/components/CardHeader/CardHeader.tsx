import "./CardHeader.scss";

interface CardHeaderProps {
  title: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title }) => {
  return <h2 className="card-header">{title}</h2>;
};

export default CardHeader;
