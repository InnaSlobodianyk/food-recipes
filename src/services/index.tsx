import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  Category,
  CategoryResponse,
  Meal,
  MealDetails,
  MealResponse,
} from "./types.ts";

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories.php",
      transformResponse: (rawResult: { categories: CategoryResponse[] }) => {
        const categories = rawResult.categories || [];

        if (categories.length === 0) return [];

        return categories.map((category) => ({
          id: category.idCategory,
          name: category.strCategory,
          imageSrc: category.strCategoryThumb,
          description: category.strCategoryDescription,
        }));
      },
    }),

    getCategoryByName: builder.query<Meal[], string>({
      query: (categoryName) => `filter.php?c=${categoryName}`,
      transformResponse: (rawResult: { meals: MealResponse[] }) => {
        const meals = rawResult.meals || [];

        if (meals.length === 0) return [];

        return meals.map((meal: MealResponse) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          imageSrc: meal.strMealThumb,
        }));
      },
    }),

    getMealById: builder.query<MealDetails, string>({
      query: (id) => `lookup.php?i=${id.split("-")[0]}`,
      transformResponse: (rawResult: { meals: MealDetails[] }) =>
        rawResult.meals[0],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByNameQuery,
  useGetMealByIdQuery,
} = recipesApi;

export { type Category, type Meal, type MealDetails };
