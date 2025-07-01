import PageHeading from "components/PageHeading";
import Spinner from "components/Spinner";
import PageContainer from "components/PageContainer";
import MealsByCountryList from "components/MealsByCountryList";
import { useGetAreasQuery } from "services";

const Countries = () => {
  const { data: areas, isFetching } = useGetAreasQuery();

  return (
    <PageContainer>
      <PageHeading>Meals by Countries</PageHeading>

      {isFetching && <Spinner />}

      {areas ? (
        <MealsByCountryList areas={areas} />
        ) : (
        <div>No countries found.</div>
      )}
    </PageContainer>
  );
};

export default Countries;
