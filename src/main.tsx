import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Categories from "pages/Categories.tsx";
import Countries from "pages/Countries.tsx";
import Home from "pages/Home.tsx";
import App from "./App.tsx";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
