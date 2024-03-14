import { useParams } from "react-router-dom";

import { useGetMealByIdQuery } from "services";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Spinner from "components/Spinner";

const MealDetails = () => {
  const { mealDetails } = useParams();
  const mealId = mealDetails?.split("-")[0] || "";
  const { data, isLoading } = useGetMealByIdQuery(mealId);
  console.log(data);

  return (
    <PageContainer>
      <BackButton />

      <PageHeading>MealDetails</PageHeading>

      {isLoading ? <Spinner /> : null}
    </PageContainer>
  );
};

export default MealDetails;
