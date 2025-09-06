import React, { useEffect, useState } from "react";
import { useTitle } from "../../../Hooks/useTitle";
import axios from "axios";
import AllVolunteerPostCard from "./AllVolunteerPostCard";

const AllVolunteerPosts = () => {
  useTitle("All-Post");
	const [volunteerPost, setVolunteerPost] = useState([]);
	const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:3000/allVolunteerPosts")
      .then((res) => {
		  setVolunteerPost(res.data);
		  setLoading(false)
      })
      .catch((error) => {
        console.log("Volunteer Post loading Error", error);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
	  <div className="bg-[#568F87]">
		  <h1 className="text-xl md:text-2xl lg:text-3xl text-center playfair-font md:pt-5 ">All Volunteer Need Post</h1>
		  <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5">
		  {volunteerPost.map((post, i) => <AllVolunteerPostCard post={post} key={i} />)}
    </div>
	</div>
  );
};

export default AllVolunteerPosts;
