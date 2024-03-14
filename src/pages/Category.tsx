import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { Meal, useGetCategoryByNameQuery } from "services";
import { capitalizeFirstLetter } from "helpers";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Cards, { CardItem } from "components/Cards";
import { CardType } from "components/Cards/Card.tsx";
import Spinner from "components/Spinner";

const Category = () => {
  const { categoryName = "" } = useParams<string>();
  const { data, isLoading } = useGetCategoryByNameQuery(categoryName);

  const meals: Meal[] = data || [];

  const cards: CardItem[] = useMemo(
    () =>
      meals.map((meal: Meal) => {
        const link = `/recipe/${meal.idMeal}-${meal.strMeal.toLowerCase().split(" ").join("-")}`;
        return {
          id: meal.idMeal,
          name: meal.strMeal,
          imageSrc: meal.strMealThumb,
          type: CardType.thumb,
          link: link,
          btnText: "Read Recipe",
        };
      }),
    [data],
  );

  return (
    <PageContainer>
      <BackButton />

      <PageHeading>
        {categoryName && capitalizeFirstLetter(categoryName)}
      </PageHeading>

      {isLoading ? <Spinner /> : null}

      {meals.length ? (
        <Cards items={cards} />
      ) : (
        <div>No Recipes in Category found</div>
      )}
    </PageContainer>
  );
};

export default Category;
