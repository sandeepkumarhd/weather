import "./App.css";
import React, { useState } from "react";
import Home from "./component/Home";
import ErrorElement from "./component/ErrorElement";
import NavBar from "./component/NavBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Details from "./component/Details";
import Page404 from "./component/Page404";
const Kav = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Kav />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:name",
        element: <Details />,
      },
      { path: "*", element: <Page404 /> },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
