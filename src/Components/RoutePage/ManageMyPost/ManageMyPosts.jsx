import React from "react";
import { NavLink } from "react-router";

const ManageMyPost = () => {
  const NavOption = (
    <nav className="flex justify-center items-center text-sm md:text-base gap-6 m-6 border-b-2 border-gray-300 pb-3">
      <NavLink
        to="/manageMyPost/myCreatedPosts"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition duration-300  ${
            isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`
        }
      >
        My Created Posts
      </NavLink>

      <div className="h-6 w-px bg-gray-300"></div>

      <NavLink
        to="/manageMyPost/myRequestedPosts"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md transition duration-300 ${
            isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`
        }
      >
        My Requested Posts
      </NavLink>
    </nav>
  );

  return <div>{NavOption}</div>;
};

export default ManageMyPost;
