import "./CardImage.scss";

interface CardImageProps {
  imageUrl: string;
}

const CardImage: React.FC<CardImageProps> = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Card" className="card-image" />;
};

export default CardImage;
