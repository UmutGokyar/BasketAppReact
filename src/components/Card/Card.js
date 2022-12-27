import React from "react";
import "./Card.css";
import CardImage from "../CardImage/CardImage";
import CardTitle from "../CardTitle/CardTitle";
import CardInfo from "../CardInfo/CardInfo";
function Card({ title, image, info, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <CardTitle title={title} />
        <CardImage image={image} />
        <CardInfo info={info} />
      </div>
    </div>
  );
}

export default Card;
