import Card, { CardType } from "./Card.tsx";

export type CardItem = {
  id: string;
  name: string;
  imageSrc: string | null;
};

export type CardLinkCreatorPropsType = {
  id?: string;
  name: string;
};

type CardsType = {
  items: CardItem[];
  type?: CardType;
  btnText?: string;
  cardLinkCreator: ({ id, name }: CardLinkCreatorPropsType) => string;
};

const Cards = ({ items, cardLinkCreator, ...rest }: CardsType) => (
  <ul className="grid w-full items-center gap-5 md:grid-cols-2 lg:grid-cols-4">
    {items?.map((item: CardItem) => (
      <Card
        key={item.id}
        id={item.id}
        title={item.name}
        thumb={item.imageSrc}
        link={cardLinkCreator({ id: item.id, name: item.name })}
        {...rest}
      />
    ))}
  </ul>
);

export default Cards;
