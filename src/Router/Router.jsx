import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Layouts/Home/Home";
import AllVolunteerPosts from "../Components/RoutePage/AllVolunteerPosts/AllVolunteerPosts";
import Login from "../Auth/Pages/Login/Login";
import Register from "../Auth/Pages/Register/Register";
import ErrorPage from "../Error/ErrorPage";
import PrivateRoute from "../Auth/Private/PrivateRoute";
import AddVolunteerPost from "../Components/RoutePage/AddVolunteerPost/AddVolunteerPost";
import PostDetailsPage from "../Components/RoutePage/PostDetailsPage/PostDetailsPage";
import ManageMyPost from "../Components/RoutePage/ManageMyPost/ManageMyPosts";
import MyCreatedPosts from "../Components/RoutePage/ManageMyPost/MyCreatedPosts/MyCreatedPosts";
import MyRequestedPosts from "../Components/RoutePage/ManageMyPost/MyRequestedPosts/MyRequestedPosts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span class="loader"></span>
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allVolunteerPosts",
        Component: AllVolunteerPosts,
      },
      {
        path: '/addVolunteerPost',
        element: <PrivateRoute><AddVolunteerPost/></PrivateRoute>
      },
      {
        path: '/allVolunteerPost/detailsPost/:id',
        element: <PrivateRoute><PostDetailsPage/></PrivateRoute>
      },
      {
        path: '/manageMyPost',
        element: <PrivateRoute><ManageMyPost /></PrivateRoute>,
        children: [
          {
            index: true,
        element: <PrivateRoute><MyCreatedPosts/></PrivateRoute>
          },
          {
            path: '/manageMyPost/myCreatedPosts',
        element: <PrivateRoute><MyCreatedPosts/></PrivateRoute>
      },
      {
        path: '/manageMyPost/myRequestedPosts',
        element: <PrivateRoute><MyRequestedPosts/></PrivateRoute> 
      }
        ]
      },
    ],
  },
]);
