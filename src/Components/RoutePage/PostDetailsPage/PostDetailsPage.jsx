import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Mail, User, UserPlus } from "lucide-react";
import { useTitle } from "../../../Hooks/useTitle";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const PostDetailsPage = () => {
  useTitle("Details-page");
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    <div className="mt-5 mx-5">
      <button onClick={()=>{navigate(-1)}} className="btn btn-soft btn-info"><IoArrowBack size={20}/> Back</button>
      <div className="min-h-screen flex items-center">
        <div className="max-w-md h-fit mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-5 flex-1 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
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
                <UserPlus size={16} />{" "}
                <p>{post?.volunteersNeeded} Volunteers Needed</p>
              </div>
            </div>

            <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2 justify-center items-center hover:bg-blue-700 transition duration-200 w-full">
              Be a Volunteer <FaRegHandshake />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
