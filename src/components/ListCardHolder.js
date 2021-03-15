import React from "react";
import { CardHolder } from "./CardHolder";


export const ListCardHolder = (cards) => {
  return cards.cards.map((card) => {
    return (
      <li className="list-none py-5" key={card.id}>
        <CardHolder data={card} />
      </li>
    );
  });
};
