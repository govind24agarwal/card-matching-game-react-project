import React from "react";
import { useGlobalContext } from "./context";
import { backPhoto } from "./Data/cardData";

function SingleCard({ id, image, flip, name, matched }) {
  const { flipCard } = useGlobalContext();
  return (
    <article
      className={`single-card ${flip && "flip"}`}
      onClick={!matched ? () => flipCard({ id, name }) : () => {}}
    >
      <div className="images">
        <img className="front-image" src={image} alt="card-front" />
        <img className="back-image" src={backPhoto} alt="card-back" />
      </div>
    </article>
  );
}

export default SingleCard;
