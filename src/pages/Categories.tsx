import { useGetCategoriesQuery } from "services";

import PageHeading from "components/PageHeading";
import PageContainer from "components/PageContainer";
import Cards, { CardLinkCreatorPropsType } from "components/Cards";
import { CardType } from "components/Cards/Card.tsx";
import Spinner from "components/Spinner";

const Categories = () => {
  const { data: cards, isLoading } = useGetCategoriesQuery();

  const cardLinkCreator = ({ name }: CardLinkCreatorPropsType) =>
    name.toLowerCase();

  return (
    <PageContainer>
      <PageHeading>Meals Categories</PageHeading>

      {isLoading ? <Spinner /> : null}

      {cards?.length ? (
        <Cards
          items={cards}
          type={CardType.thumb}
          cardLinkCreator={cardLinkCreator}
        />
      ) : (
        <div>No Categories found</div>
      )}
    </PageContainer>
  );
};

export default Categories;
