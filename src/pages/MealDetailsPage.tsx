import { Link, useParams } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { GiHotMeal } from "react-icons/gi";

import { useGetMealByIdQuery } from "services";

import PageContainer from "components/PageContainer";
import PageHeading from "components/PageHeading";
import BackButton from "components/BackButton";
import Spinner from "components/Spinner";
import MealDetails, { IngredientsAndMeasuresType } from "components/MealDetails";

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

  const ingredientsAndMeasures: IngredientsAndMeasuresType[] = Object.keys(data)
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
          {area ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 rounded-full bg-indigo-600 p-1 pr-2">
                  <span className="rounded-full bg-indigo-800 p-1">
                    <GrMap />
                  </span>
                {data.strArea}
              </div>
            </div>
          ) : null}

          {category ? (
            <div className="flex flex-col gap-3">
              <Link
                to={`/categories/${category.toLowerCase()}`}
                className="flex items-center gap-1 rounded-full bg-indigo-600 hoverable:hover:bg-indigo-600/75 p-1 pr-2"
              >
                <span className="rounded-full bg-indigo-800 p-1">
                  <GiHotMeal />
                </span>

                <span>{category}</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      <MealDetails meal={meal} />

      {isLoading ? <Spinner /> : null}
    </PageContainer>
  );
};

export default MealDetailsPage;
