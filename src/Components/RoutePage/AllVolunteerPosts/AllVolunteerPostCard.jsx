import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const AllVolunteerPostCard = ({ post, isTable }) => {
  const [showDec, setShowDec] = useState(false);

  const truncatedText =
    post.description.length > 60
      ? post.description.slice(0, 60) + "..."
      : post.description;

  const TableView = () => (
    <div className="w-full border-b py-3 px-2 flex  md:flex-row justify-between items-center md:items-center text-sm md:text-base">
      <div className="avatar md:pr-3 hidden md:block">
        <div className="w-16 rounded">
          <img src={post.thumbnail} alt={post.title} />
        </div>
      </div>
      <div className="flex-1 font-semibold text-sm md:text-lg">
        {post.title}
      </div>
      <div className="flex-1 flex items-center gap-1 text-blue-300">
        <IoLocationSharp /> <small>{post.location}</small>
      </div>
      <div className="flex-1 text-xs md:text-sm">
        {post.volunteersNeeded} People
      </div>
      <div className="flex-1 text-xs md:text-sm">
        Deadline: {post.applicationDeadline}
      </div>
      <div className="flex-1 text-right mt-2 md:mt-0">
        <NavLink
          to={`/allVolunteerPost/detailsPost/${post._id}`}
          className="btn btn-primary flex gap-2 items-center btn-xs md:btn-sm lg:btn-md"
        >
          <span className="hidden md:block">View</span> Details{" "}
          <FaEye size={14} />
        </NavLink>
      </div>
    </div>
  );
  const CardView = () => (
    <div className="card bg-base-100 shadow-sm hover:scale-105 duration-150 ease-in transition-transform">
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
          {post.description.length > 60  && (
            <button
              className="text-blue-500 mt-1"
              onClick={() => setShowDec((prev) => !prev)}
            >
              {showDec ? "See Less" : "See More"}
            </button>
          )}
        </p>

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

  return <>{isTable ? <TableView /> : <CardView />}</>;
};

export default AllVolunteerPostCard;
