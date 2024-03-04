import "./CardBody.scss";

interface CardBodyProps {
  text: string;
}

const CardBody: React.FC<CardBodyProps> = ({ text }) => {
  return <p className="card-body">{text}</p>;
};

export default CardBody;
