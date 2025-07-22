import { useParams } from "react-router-dom";

import { useGetMealsByCountryQuery } from "services";
import { capitalizeFirstLetter } from "helpers";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Cards from "components/Cards";
import Spinner from "components/Spinner";

const MealsByCountry = () => {
  const { countryName = "" } = useParams<string>();
  const { data: meals, isLoading } = useGetMealsByCountryQuery(countryName);

  return (
    <PageContainer>
      <BackButton />

      <PageHeading>{capitalizeFirstLetter(countryName)}</PageHeading>

      {isLoading && <Spinner />}

      {meals?.length ? (
        <Cards
          items={meals}
          btnText="Read Recipe"
        />
      ) : (
        <div>No Recipes by this area found.</div>
      )}
    </PageContainer>
  );
};

export default MealsByCountry;
