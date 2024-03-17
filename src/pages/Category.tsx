import { useParams } from "react-router-dom";

import { useGetCategoryByNameQuery } from "services";
import { capitalizeFirstLetter } from "helpers";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Cards, { CardLinkCreatorPropsType } from "components/Cards";
import Spinner from "components/Spinner";

const Category = () => {
  const { categoryName = "" } = useParams<string>();
  const { data: meals, isLoading } = useGetCategoryByNameQuery(categoryName);

  const cardLinkCreator = ({ id, name }: CardLinkCreatorPropsType) =>
    id !== undefined
      ? `/recipe/${id}-${name.toLowerCase().split(" ").join("-")}`
      : "";

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
          cardLinkCreator={cardLinkCreator}
          btnText="Read Recipe"
        />
      ) : (
        <div>No Recipes in Category found</div>
      )}
    </PageContainer>
  );
};

export default Category;
