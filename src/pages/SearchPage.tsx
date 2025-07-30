import { useParams } from "react-router-dom";

import BackButton from "components/BackButton";
import PageHeading from "components/PageHeading";
import PageContainer from "components/PageContainer";
import Spinner from "components/Spinner";
import Cards from "components/Cards";
import { capitalizeFirstLetter } from "helpers";
import { useGetMealByNameQuery } from "services";

const SearchPage = () => {
  const { searchQuery = "" } = useParams<string>();

  const { data: meals, isLoading } = useGetMealByNameQuery(searchQuery, {
    skip: !searchQuery,
  });

  return (
    <PageContainer>
      <BackButton />

      <PageHeading>
        {searchQuery && `Search: ${capitalizeFirstLetter(searchQuery)}`}
      </PageHeading>

      {isLoading ? <Spinner /> : null}

      {meals?.length ? (
        <Cards
          items={meals}
          btnText="Read Recipe"
        />
      ) : (
        <div>No Recipes found</div>
      )}
    </PageContainer>
  );
};

export default SearchPage;