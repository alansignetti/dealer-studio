import CardButton from "../CardButton/CardButton";
import CardBody from "../CardBody/CardBody";
import CardHeader from "../CardHeader/CardHeader";
import CardImage from "../CardImage/CardImage";
import "./Card.scss";
import cardImg from "../../images/card-bg.jpg";
import { useState } from "react";

const cards = [
  {
    imageUrl: cardImg,
    title: "Heading 1",
    text: "Neque impedit rerum perferendis nisi laboriosam eveniet aliquam sed alias consequuntur ullam modi!",
    buttonText: "Button 1",
  },
  {
    imageUrl: cardImg,
    title: "Heading 2",
    text: "Lorem ipsum ded alias consequuntur ullam modi! Velit asperiores consequuntur iure?",
    buttonText: "Button 2",
  },
  {
    imageUrl: cardImg,
    title: "Heading 3",
    text: "Lorem ipsum dolor, sit amet consectetur  sit amet eque impedit rerum perferendis  sit amet eque impedit rerum perferendis  adipisicing elit. Dolorum quo ad porro quas, neque impedit rerum perferendis nisi laboriosam eveniet aliquam sed alias consequuntur ullam modi! Velit asperiores consequuntur iure?",
    buttonText: "Button 3",
  },
];

const Card: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(1); // Initially select middle card (index 1)

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className="card-component">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className={`card ${selectedCardIndex === index ? "selected" : ""}`}
            key={card.title}
            onClick={() => handleCardClick(index)}>
            <CardImage imageUrl={card.imageUrl} />
            <div className="card-content">
              <CardHeader title={card.title} />
              <CardBody text={card.text} />
              <CardButton text={card.buttonText} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
