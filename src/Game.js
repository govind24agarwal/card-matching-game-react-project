import React from "react";
import SingleCard from "./SingleCard";
import { useGlobalContext } from "./context";
function Game() {
  const { cardData } = useGlobalContext();

  return (
    <section className="main-body">
      <div className="game">
        {cardData.map((card) => {
          return <SingleCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
}

export default Game;
