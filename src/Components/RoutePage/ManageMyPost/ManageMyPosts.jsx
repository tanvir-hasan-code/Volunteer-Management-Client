import React from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { useTitle } from "../../../Hooks/useTitle";

const ManageMyPost = () => {
  useTitle('Mange-Post')
  const location = useLocation();
  const NavOption = (
    <nav className="flex justify-center items-center text-sm md:text-base gap-6 m-6 border-b-2 border-gray-300 pb-3">
      <NavLink
        to="myCreatedPosts"
        className={({ isActive }) => {
          const active = isActive || location.pathname === "/manageMyPost";
          return `px-4 py-2 rounded-md transition duration-300 ${
            active ? "text-blue-500 font-bold underline" : "hover:bg-gray-100 text-gray-700"
          }`;
        }}
      >
        My Created Posts
      </NavLink>

      <div className="h-6 w-px bg-gray-300"></div>

      <NavLink
        to="/manageMyPost/myRequestedPosts"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition duration-300 ${
            isActive
              ? "text-blue-500 font-bold underline"
              : "hover:bg-gray-100 text-gray-700"
          }`
        }
      >
        My Requested Posts
      </NavLink>
    </nav>
  );

  return (<>
      {NavOption}
    <Outlet />
  </>
  );
};

export default ManageMyPost;
