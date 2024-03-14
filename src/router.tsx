import { createBrowserRouter } from "react-router-dom";

import Home from "pages/Home.tsx";
import Categories from "pages/Categories.tsx";
import Countries from "pages/Countries.tsx";
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
        ],
      },
      {
        path: "/countries",
        children: [
          {
            index: true,
            element: <Countries />,
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
    ],
  },
]);
