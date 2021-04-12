import { CardView } from "./CardView";

export const ListCardHolder = (cards) => {
  return cards.cards.map((card) => {
    return (
      <li className="list-none py-5" key={card.id}>
        <CardView data={card} />
      </li>
    );
  });
};
