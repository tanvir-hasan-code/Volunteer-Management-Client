import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const VolunteerNeedsNowCards = ({ post }) => {
  const [showDec, setShowDec] = useState(false);

  const truncatedText =
    post.description.length > 60
      ? post.description.slice(0, 60) + "..."
      : post.description;

  return (
    <div className="card bg-base-100 w-11/12 mx-auto md:w-full lg:w-full  shadow-sm hover:scale-105 duration-150 ease-in transition-transform">
      <figure>
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-[200px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="flex justify-between">
          Deadline: {post.applicationDeadline}
          <small className="flex items-center gap-1 text-blue-500">
            <IoLocationSharp /> {post.location}
          </small>
        </p>
        <p>
          {showDec ? post.description : truncatedText}{" "}
          {post.description.length > 60 && (
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowDec((prev) => !prev)}
            >
              {showDec ? "See Less" : "See More"}
            </button>
          )}
        </p>
        <div>
          <p>
            {" "}
            Type:{" "}
            <span className="bg-blue-400 text-white px-1 rounded-full">
              {post?.type}
            </span>
          </p>
        </div>

        <div className="card-actions justify-between flex items-center">
          <p className="bg-orange-200 py-1 px-1 max-w-fit rounded-full">
            Needed: {post.volunteersNeeded} People
          </p>
          <NavLink
            to={`/allVolunteerPost/detailsPost/${post._id}`}
            className="btn btn-primary flex gap-2 items-center"
          >
            View Details <FaEye size={18} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsNowCards;
