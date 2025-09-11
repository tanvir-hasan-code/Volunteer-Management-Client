import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Mail, User, UserPlus } from "lucide-react";
import { useTitle } from "../../../Hooks/useTitle";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import useAuth from "../../../Hooks/Auth/useAuth";
import Swal from "sweetalert2";

const PostDetailsPage = () => {
  useTitle("Details-page");
  const { user } = useAuth();
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/allVolunteerPosts/detailsPost/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id, refresh]);

  const handleRequestVolunteer = async (e) => {
    e.preventDefault();
    const postId = post._id;
    const form = e.target;
    const formData = new FormData(form);
    const reqData = Object.fromEntries(formData.entries());
    reqData.postId = postId;

    try {
      setLoading(true);
      const requestRes = await axios.post(
        `http://localhost:3000/volunteerRequest`,
        reqData
      );

      if (requestRes.data.insertedId) {
        setIsModalShow(false);

        const patchRes = await axios.patch(
          `http://localhost:3000/allVolunteerPosts/detailsPost/${postId}`
        );

        setRefresh((prev) => !prev);

        const updatedPost = patchRes.data;
        setPost((prev) => ({
          ...prev,
          volunteersNeeded: updatedPost.volunteersNeeded,
        }));

        Swal.fire({
          title: "Requested!",
          text: "This Post is Requested Successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Request Error:", error);
      Swal.fire({
        title: "Failed!",
        text: "Fail Request Post.",
        icon: "error",
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="mt-5 mx-5">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-soft btn-info"
      >
        <IoArrowBack size={20} /> Back
      </button>
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
            {post.volunteersNeeded <= 0 && (
              <p className="text-red-600 font-bold text-center mt-2">
                Sorry! No more volunteers needed for this post.
              </p>
            )}

            <button
              onClick={() => setIsModalShow(true)}
              className={`mt-5 bg-blue-600  text-white px-4 py-2 rounded-lg flex gap-2 justify-center items-center hover:bg-blue-700 transition duration-200 w-full ${
                post.volunteersNeeded <= 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={post.volunteersNeeded <= 0}
            >
              Be a Volunteer <FaRegHandshake />
            </button>
          </div>
        </div>
      </div>
      {isModalShow && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Requested Volunteer INFO!</h3>
            <div className="card bg-base-100 shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleRequestVolunteer} className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="displayName"
                    className="input w-full"
                    readOnly
                    defaultValue={user?.displayName}
                    placeholder="Email"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    readOnly
                    defaultValue={user?.email}
                    placeholder="Email"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name="photoURL"
                    defaultValue={user.photoURL}
                    className="input w-full "
                    placeholder="Password"
                    readOnly
                  />
                  <label className="label">Status</label>
                  <input
                    type="text"
                    name="status"
                    defaultValue={"Request"}
                    className="input w-full"
                    placeholder="Password"
                    readOnly
                  />
                  <div className="flex mt-2 items-center justify-between">
                    <button
                      onClick={() => setIsModalShow(false)}
                      className="btn btn-warning"
                    >
                      Close
                    </button>
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Request Now"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;
