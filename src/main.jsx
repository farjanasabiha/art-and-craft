import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Layout from "./Layout/Layout.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Home from "./Pages/Home/Home";
import AllArtAndCraftItem from "./Pages/AllArtAndCraftItem/AllArtAndCraftItem.jsx";
import AddCraftItem from "./Pages/AddCraftItem/AddCraftItem.jsx";
import MyArtAndCraftList from "./Pages/MyArtAndCraftList/MyArtAndCraftList.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import UpdatePage from "./Pages/UpdatePage/UpdatePage.jsx";
import ViewDetailsPage from "./Pages/ViewDetailsPage/ViewDetailsPage.jsx";
import ChallangeCategoryPage from "./Pages/ChallangeCategoryPage/ChallangeCategoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("Art&CradtCategories.json"),
      },
      {
        path: "/AllArtAndCraftItem",
        element: <AllArtAndCraftItem></AllArtAndCraftItem>,
        loader: () => fetch("http://localhost:5000/list"),
      },
      {
        path: "/AddCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/MyArtAndCraftList",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/list"),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "updatePage/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/list/${params.id}`),
      },

      {
        path: "viewDetailsPage",
        element: <ViewDetailsPage></ViewDetailsPage>,
        loader: () => fetch("http://localhost:5000/list"),
      },
      {
        path: "/ChallangeCategoryPage/:id",
        element: <ChallangeCategoryPage></ChallangeCategoryPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
