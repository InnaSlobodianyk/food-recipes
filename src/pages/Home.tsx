import PageContainer from "components/PageContainer";
import RandomMeal from "components/RandomMeal";
import PageHeading from "components/PageHeading";

import { useGetRandomMealQuery } from "services";

const Home = () => {
  const { data, isFetching } = useGetRandomMealQuery();

  const meal = data || undefined;

  return (
    <PageContainer>
      <PageHeading>Your Kitchen Companion – FoodExplorer Awaits!</PageHeading>

      {meal && <RandomMeal meal={meal} isFetching={isFetching} />}
    </PageContainer>
  )
};

export default Home;
