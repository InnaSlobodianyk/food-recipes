import { useMemo } from "react";

import { Category, useGetCategoriesQuery } from "services";

import PageHeading from "components/PageHeading";
import PageContainer from "components/PageContainer";
import Cards, { CardItem } from "components/Cards";
import { CardType } from "components/Cards/Card.tsx";
import Spinner from "components/Spinner";

const Categories = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const categories: Category[] = data || [];

  const cards: CardItem[] = useMemo(
    () =>
      categories.map((category: Category) => {
        return {
          id: category.idCategory,
          name: category.strCategory,
          imageSrc: category.strCategoryThumb,
          type: CardType.thumb,
          link: category.strCategory.toLowerCase(),
          btnText: "View Recipes",
        };
      }),
    [data],
  );

  return (
    <PageContainer>
      <PageHeading>Meals Categories</PageHeading>

      {isLoading ? <Spinner /> : null}

      {categories.length ? (
        <Cards items={cards} type={CardType.thumb} />
      ) : (
        <div>No Categories found</div>
      )}
    </PageContainer>
  );
};

export default Categories;
