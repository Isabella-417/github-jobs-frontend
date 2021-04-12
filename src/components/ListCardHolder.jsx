import { CardView } from "./CardView.jsx";

export const ListCardHolder = ({ cards }) => {
  const { results } = cards;

  return results.map((card) => {
    return (
      <li className="list-none py-5" key={card.id}>
        <CardView data={card} />
      </li>
    );
  });
};
