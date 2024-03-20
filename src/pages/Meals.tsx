import { useParams } from "react-router-dom";

import { useGetMealsByCategoryQuery } from "services";
import { capitalizeFirstLetter } from "helpers";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Cards from "components/Cards";
import Spinner from "components/Spinner";

const Meals = () => {
  const { categoryName = "" } = useParams<string>();
  const { data: meals, isLoading } = useGetMealsByCategoryQuery(categoryName);

  return (
    <PageContainer>
      <BackButton />

      <PageHeading>
        {categoryName && capitalizeFirstLetter(categoryName)}
      </PageHeading>

      {isLoading ? <Spinner /> : null}

      {meals?.length ? (
        <Cards
          items={meals}
          btnText="Read Recipe"
        />
      ) : (
        <div>No Recipes in Category found</div>
      )}
    </PageContainer>
  );
};

export default Meals;
