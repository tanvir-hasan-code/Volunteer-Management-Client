import React from "react";
import { FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdDetails } from "react-icons/md";
import { Link } from "react-router";

const AllVolunteerPostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={post.thumbnail} alt={post.title} className="w-full h-[200px] object-cover"/>
      </figure>
      <div className="card-body">
			  <h2 className="card-title">{post.title} </h2>
				  <p className="flex justify-between">Deadline: {post.applicationDeadline} <small className="flex items-center gap-1"><IoLocationSharp/> {post.location}</small> </p>
			  <p>{post.description}</p>
			  <div className="card-actions justify-end flex items-center">
          <Link to={`/allVolunteerPosts/detailsPost/${post._id}`} className="btn btn-primary flex gap-2 items-center">
            View Details <FaEye size={18} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllVolunteerPostCard;
