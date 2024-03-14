import Card, { CardType } from "./Card.tsx";

export type CardItem = {
  id: string;
  name: string;
  imageSrc: string;
  link: string;
  btnText: string;
};

type CardsType = {
  items: CardItem[];
  type?: CardType;
};

const Cards = ({ items, type }: CardsType) => (
  <ul className="grid w-full items-center gap-5 md:grid-cols-2 lg:grid-cols-4">
    {items?.map((item: CardItem) => (
      <Card
        key={item.id}
        id={item.id}
        title={item.name}
        thumb={item.imageSrc}
        link={item.link}
        type={type}
        btnText={item.btnText}
      />
    ))}
  </ul>
);

export default Cards;
