import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Layouts/Home/Home";
import AllVolunteerPosts from "../Components/AllVolunteerPosts/AllVolunteerPosts";
import Login from "../Auth/Pages/Login/Login";
import Register from "../Auth/Pages/Register/Register";
import ErrorPage from "../Components/Error/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span class="loader"></span>
      </div>
    ),
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/allVolunteerPosts',
        Component: AllVolunteerPosts
      }
    ],
  },
]);
