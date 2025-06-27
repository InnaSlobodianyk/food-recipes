export type MealResponse = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string | null;
};

export type Meal = {
  id: string;
  name: string;
  imageSrc: string | null;
  url: string;
};