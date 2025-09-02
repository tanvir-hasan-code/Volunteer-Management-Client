import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const NavbarOption = (
    <nav className="grid space-y-1 lg:flex lg:space-y-0 lg:space-x-5">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/allVolunteerPosts'}>All volunteer Need posts</NavLink>
    </nav>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavbarOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Volunify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavbarOption}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link to={'/login'}><button className="btn btn-primary btn-sm md:btn-md">Login</button></Link>
        <Link to={'/register'}><button className="btn btn-success btn-sm md:btn-md">Register</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
