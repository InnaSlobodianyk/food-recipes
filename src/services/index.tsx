import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Category, CategoryResponse } from "types/Category.ts";
import { Meal, MealResponse } from "types/Meal.ts";
import { MealDetails, MealDetailsResponse } from "types/MealDetails.ts";
import { Area, AreaResponse } from "types/Country.ts";

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

        return categories.map((category) => ({
          id: category.idCategory,
          name: category.strCategory,
          imageSrc: category.strCategoryThumb,
          description: category.strCategoryDescription,
          url: category.strCategory.toLowerCase(),
        }));
      },
    }),

    getMealsByCategory: builder.query<Meal[], string>({
      query: (categoryName) => `filter.php?c=${categoryName}`,
      transformResponse: (rawResult: { meals: MealResponse[] }) => {
        const meals = rawResult.meals || [];

        return meals.map((meal: MealResponse) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          imageSrc: meal.strMealThumb,
          url: `/recipe/${meal.idMeal}-${meal.strMeal.toLowerCase().replace(/[&(),']/g, '').replace(/\s+/g, '-')}`,
        }));
      },
    }),

    getMealById: builder.query<MealDetails, string>({
      query: (id) => `lookup.php?i=${id.split("-")[0]}`,
      transformResponse: (rawResult: { meals: MealDetailsResponse[] }) =>
        rawResult.meals.map(({idMeal, strMeal, strMealThumb, ...meal}: MealDetailsResponse) => ({
          id: idMeal,
          name: strMeal,
          imageSrc: strMealThumb,
          ...meal
        }))[0],
    }),

    getRandomMeal: builder.query<MealDetails, void>( {
      query: () => "random.php",
      transformResponse: (rawResult: { meals: MealDetailsResponse[] }) =>
        rawResult.meals.map(({idMeal, strMeal, strMealThumb, ...meal}: MealDetailsResponse) => ({
          id: idMeal,
          name: strMeal,
          imageSrc: strMealThumb,
          ...meal
        }))[0],
    }),

    getAreas: builder.query<Area[], void>({
      query: () => "list.php?a=list",
      transformResponse: (rawResult: { meals: AreaResponse[] }) => {
        const areas = rawResult.meals || [];

        return areas.map((meal: AreaResponse) => ({
          name: meal.strArea,
          url: `${meal.strArea.toLowerCase()}`,
        }));
      },
    }),

    getMealsByCountry: builder.query<Meal[], string>({
      query: (countryName) => `filter.php?a=${countryName}`,
      transformResponse: (rawResult: { meals: MealResponse[] }) => {
        const meals = rawResult.meals || [];

        return meals.map((meal: MealResponse) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          imageSrc: meal.strMealThumb,
          url: `/recipe/${meal.idMeal}-${meal.strMeal.toLowerCase().replace(/[&(),']/g, '').replace(/\s+/g, '-')}`,
        }));
      },
    }),

    getMealByName: builder.query<Meal[], string>({
      query: (searchQuery) => `search.php?s=${searchQuery}`,
      transformResponse: (rawResult: { meals: MealResponse[] }) => {
        return rawResult.meals.map(({idMeal, strMeal, strMealThumb, ...meal}: MealResponse) => ({
          id: idMeal,
          name: strMeal,
          imageSrc: strMealThumb,
          url: `/recipe/${idMeal}-${strMeal.toLowerCase().replace(/[&(),']/g, '').replace(/\s+/g, '-')}`,
          ...meal
        }));
      }
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetMealsByCategoryQuery,
  useGetMealByIdQuery,
  useGetRandomMealQuery,
  useGetAreasQuery,
  useGetMealsByCountryQuery,
  useGetMealByNameQuery,
} = recipesApi;

export { type Category, type Meal, type MealDetails };
