import PageContainer from "components/PageContainer";
import RandomMeal from "components/RandomMeal";
import PageHeading from "components/PageHeading";
import MealsCategories from "components/MealsCategories";
import Search from "components/Search";

import { useGetCategoriesQuery, useGetRandomMealQuery } from "services";

const Home = () => {
  const { data, isFetching } = useGetRandomMealQuery();
  const { data: categories } = useGetCategoriesQuery();

  const meal = data || undefined;

  return (
    <PageContainer>
      <PageHeading>Your Kitchen Companion – FoodExplorer Awaits!</PageHeading>

      {meal && <RandomMeal meal={meal} isFetching={isFetching} />}

      <Search />

      {categories && <MealsCategories meals={categories} />}
    </PageContainer>
  )
};

export default Home;
