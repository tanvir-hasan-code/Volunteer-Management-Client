import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Mail, User, UserPlus } from "lucide-react";
import { useTitle } from "../../../Hooks/useTitle";
import axios from "axios";
import { data, useParams } from "react-router";
import { MdDriveFileRenameOutline } from "react-icons/md";

const PostDetailsPage = () => {
  useTitle("Details-page");
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/allVolunteerPosts/detailsPost/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
    <div className="min-h-screen flex items-center">
      <div className="max-w-md h-fit mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-5 flex-1 flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{post.description}</p>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <User size={16} /> <span>{post.Organizer}</span>
            </div>
            <div className="flex items-center gap-2">
              <MdDriveFileRenameOutline /> <span>{post.hr_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>{post.hr_email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>{post.location}</span>
            </div>
            <div className="flex items-center gap-2 text-red-600 font-medium">
              <Calendar size={16} />
              <span>
                Deadline:{" "}
                {new Date(post.applicationDeadline).toLocaleDateString()}
              </span>
            </div>
				  <div className="flex items-center gap-3">
					  <UserPlus size={16} /> <p>{post?.volunteersNeeded} Volunteers Needed</p>
				   </div>
				  </div>

          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 w-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
