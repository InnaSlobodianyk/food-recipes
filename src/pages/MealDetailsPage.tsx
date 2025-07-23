import { useParams } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { GiHotMeal } from "react-icons/gi";

import { useGetMealByIdQuery } from "services";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Spinner from "components/Spinner";
import Pill from "components/Pill";
import MealDetails from "components/MealDetails";
import type { IngredientMeasure } from "types/MealDetails.ts";

const MealDetailsPage = () => {
  const { mealDetails } = useParams();
  const { data, isLoading } = useGetMealByIdQuery(mealDetails || "");

  if (!data) return <div>No Recipe</div>;

  const {
    name,
    imageSrc,
    strCategory: category,
    strInstructions: instructions,
    strArea: area,
    strTags: tags,
    strYoutube,
  } = data;

  const youtubeSrc = strYoutube?.match(/(?:\?|&)v=([^&]+)/)?.[1] || null;

  const ingredientsAndMeasures: IngredientMeasure[] = Object.keys(data)
    .filter((i) => i.startsWith("strIngredient"))
    .filter(
      (i) =>
        data[i as keyof typeof data]?.trim() !== "" &&
        data[i as keyof typeof data] !== null,
    )
    .map((ing, idx) => ({
      id: idx,
      ingredient: data[ing as keyof typeof data],
      measure: data[`strMeasure${idx + 1}` as keyof typeof data],
    }));

  let instructionString = instructions.split('\r\n');

  if (instructionString.length < 2) {
    instructionString = instructions.split('.');
  }

  const meal = {
    name,
    imageSrc,
    instructions: instructionString,
    tags: tags ? tags.split(",") : [],
    youtubeSrc,
    ingredientsAndMeasures,
  };

  return (
    <PageContainer>
      <BackButton />

      <div className="flex flex-col gap-4">
        <PageHeading>{name}</PageHeading>

        <div className="flex gap-6">
          {area && <Pill text={area} icon={<GrMap />} />}

          {category && (
            <Pill
              text={category}
              icon={<GiHotMeal />}
              isLink
              to={`/categories/${category.toLowerCase()}`}
            />
          )}
        </div>
      </div>

      <MealDetails meal={meal} />

      {isLoading && <Spinner />}
    </PageContainer>
  );
};

export default MealDetailsPage;
