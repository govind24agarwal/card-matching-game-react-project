import React, { useState } from "react";
import SingleCard from "./SingleCard";
import { data } from "./Data/cardData";

function Game() {
  return (
    <section>
      <h2>Card Game</h2>
      <div>
        {data.map((card) => {
          return <h4>{card.id}</h4>;
        })}
      </div>
    </section>
  );
}

export default Game;
