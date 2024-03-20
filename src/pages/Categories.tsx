import { useGetCategoriesQuery } from "services";

import PageHeading from "components/PageHeading";
import PageContainer from "components/PageContainer";
import Cards from "components/Cards";
import { CardType } from "components/Cards/Card.tsx";
import Spinner from "components/Spinner";

const Categories = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <PageContainer>
      <PageHeading>Meals Categories</PageHeading>

      {isLoading ? <Spinner /> : null}

      {categories?.length ? (
        <Cards
          items={categories}
          type={CardType.thumb}
        />
      ) : (
        <div>No Categories found</div>
      )}
    </PageContainer>
  );
};

export default Categories;
