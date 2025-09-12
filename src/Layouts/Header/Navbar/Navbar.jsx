import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import useAuth from "../../../Hooks/Auth/useAuth";
import { PiSignOutBold } from "react-icons/pi";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import { IoIosArrowDown } from "react-icons/io";
import ThemeChange from "../../../Theme/ThemeChange";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
 

  const NavbarOption = (
    <nav className="grid space-y-1 lg:flex lg:space-y-0 items-center lg:space-x-5">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allVolunteerPosts"}>All volunteer Need posts</NavLink>
      {user && (
        <div className="dropdown">
          <div tabIndex={0} >
            <p className="flex items-center gap-1" >My-Profile  <IoIosArrowDown/></p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NavLink to='/addVolunteerPost'>Add Volunteer Post</NavLink>
            </li>
            <li>
              <NavLink to='/manageMyPost'>Manage My Posts</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "SignOut User Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Not SignOut",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="navbar bg-[#FFF5F2] shadow-sm root-font lg:px-5">
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
        <div className="glowing-container">
          <a href="/" className="btn btn-ghost text-xl pl-0">
            <img
              className="hidden md:block  object-cover rounded-full w-10"
              src="https://i.ibb.co.com/DDnLCLmv/Screenshot-2.png"
              alt="Company-Logo"
            />
            <span className="text-3xl font-extrabold text-blue-600 rotate-rgb">
              ᐯOᒪᑌᑎIᖴY
            </span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavbarOption}</ul>
      </div>

        
      {user ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <div className="avatar ">
                <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                  <img
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    src={user.photoURL}
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm"
            >
              <li>
                <a className="text-xl font-semibold">{user.displayName}</a>
              </li>
              <li>
                <a className="text-blue-500">{user.email}</a>
              </li>
              <div>
                <button
                  onClick={handleSignOut}
                  className="btn w-full btn-error"
                >
                  SignOut <PiSignOutBold />
                </button>
              </div>
            </ul>
          </div>
        </div>
      ) : (
          <div className="navbar-end flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-primary btn-sm md:btn-md">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-success btn-sm md:btn-md">
              Register
            </button>
          </Link>
            <ThemeChange />
        </div>
      )}

      <Tooltip id="my-tooltip" place="top" effect="solid" />
    </div>
  );
};

export default Navbar;
