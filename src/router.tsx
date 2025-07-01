import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "pages/Home.tsx";
import Categories from "pages/Categories.tsx";
import Countries from "pages/Countries.tsx";
import Meals from "pages/Meals.tsx";
import MealDetailsPage from "pages/MealDetailsPage.tsx";
import MealsByCountry from "pages/MealsByCountry.tsx";

import Layout from "components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: ":categoryName",
            element: <Meals />,
          },
        ],
      },
      {
        path: "/countries",
        children: [
          {
            index: true,
            element: <Countries />,
          },
          {
            path: ":countryName",
            element: <MealsByCountry />,
          },
        ],
      },
      {
        path: "/ingredient",
        children: [
          {
            path: ":link",
            element: <h1>Test</h1>,
          },
        ],
      },
      {
        path: "/recipe",
        children: [
          {
            index: true,
            element: <Navigate to="/" />,
          },
          {
            path: ":mealDetails",
            element: <MealDetailsPage />,
          },
        ],
      },
    ],
  },
]);
