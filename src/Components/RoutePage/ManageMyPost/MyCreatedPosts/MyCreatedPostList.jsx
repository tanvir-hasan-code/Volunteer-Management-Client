import axios from "axios";
import React, { use, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/Auth/useAuth";
import { X } from "lucide-react";

const MyCreatedPostList = ({ createdPost }) => {
  const posts = use(createdPost) || [];
  const { user } = useAuth();

  const [post, setPost] = useState(posts);
  const [isModal, setIsModal] = useState(false);
  const [selectPost, setSelectPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const openModal = async (_id) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/allVolunteerPosts/detailsPost/${_id}`
      );
      setSelectPost(res.data);
      setIsModal(true);
    } catch (error) {
      console.error("Error Loading Post", error);
      Swal.fire({
        title: "Failed!",
        text: "Error Loading Post.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());
    try {
      axios
        .put(
          `http://localhost:3000/allVolunteerPosts/detailsPost/${selectPost._id}`,
          updateData
        )
        .then((res) => {
          if (res.data) {
            setIsModal(false);
          }
        });
    } catch (err) {
      console.error("Updateing Error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/manageMyPost/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
              const remainder = post.filter((p) => p._id.toString() !== _id);
              setPost(remainder);
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Delete Fail",
              text: "Your Post Not deleted!.",
              icon: "error",
            });
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="overflow-x-auto shadow-lg rounded-lg ">
        <table className="table w-full min-w-max">
          {/* Table Head */}
          <thead className="bg-blue-500 text-white">
            <tr>
              <th>No.</th>
              <th className="p-3 text-center">Title</th>
              <th className="p-3 text-center">Type</th>
              <th className="p-3 text-center">Request Count</th>
              <th className="p-3 text-center">View Details</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {post.length > 0 ? (
              post.map((p, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-100 transition duration-200 text-sm md:text-base"
                >
                  <td>{i + 1}.</td>
                  <td className="p-3 text-center">{p.title}</td>
                  <td className="p-3 text-center">{p.type}</td>
                  <td className="p-3 text-center">10</td>
                  <td className="flex gap-1 justify-end">
                    <button className="p-3 btn btn-info btn-xs lg:btn-md my-3">
                      See Request
                    </button>
                    <button
                      onClick={() => openModal(p._id)}
                      className="p-3 btn btn-warning btn-xs lg:btn-md my-3"
                    >
                      Update <FaPencilAlt />
                    </button>
                    <button
                      onClick={() => handleDeletePost(p._id)}
                      className="p-3 btn btn-error btn-xs lg:btn-md my-3"
                    >
                      <MdAutoDelete /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="w-full flex justify-end ">
              {" "}
              <button
                onClick={() => setIsModal(false)}
                className="btn btn-circle btn-error"
              >
                <X />
              </button>
            </div>
            <h3 className="font-bold  text-center text-2xl">Update Post</h3>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <form onSubmit={handleUpdatePost}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend">Basic Info</legend>

                  <label className="label">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="input"
                    defaultValue={selectPost?.title}
                    placeholder="Title"
                  />

                  <label className="label">Organizer</label>
                  <input
                    type="text"
                    name="Organizer"
                    className="input"
                    defaultValue={selectPost?.Organizer}
                    placeholder="Organizer name"
                  />

                  <label className="label">Location</label>
                  <input
                    type="text"
                    name="location"
                    className="input"
                    defaultValue={selectPost?.location}
                    placeholder="Location"
                  />

                  <label className="label">Thumbnail</label>
                  <input
                    type="url"
                    name="thumbnail"
                    className="input"
                    defaultValue={selectPost?.thumbnail}
                    placeholder="Thumbnail URL"
                  />
                </fieldset>

                {/* Type*/}
                <fieldset className="fieldset bg-base-200 border-base-300  rounded-box w-full border p-4">
                  <legend className="fieldset-legend">Category</legend>
                  <div className="filter">
                    <input
                      className="btn filter-reset"
                      type="radio"
                      name="type"
                      aria-label="All"
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Environment"
                      aria-label="Environment"
                      defaultChecked={selectPost?.type === "Environment"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Health"
                      aria-label="Health"
                      defaultChecked={selectPost?.type === "Health"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Education"
                      aria-label="Education"
                      defaultChecked={selectPost?.type === "Education"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Communication"
                      aria-label="Communication"
                      defaultChecked={selectPost?.type === "Communication"}
                    />
                    {/* start  */}
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Sports & Recreation"
                      aria-label="Sports & Recreation"
                      defaultChecked={
                        selectPost?.type === "Sports & Recreation"
                      }
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Social Welfare"
                      aria-label="Social Welfare"
                      defaultChecked={selectPost?.type === "Social Welfare"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Women & Children"
                      aria-label=""
                      defaultChecked={selectPost?.type === "Women & Children"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Disaster Relief"
                      aria-label="Disaster Relief"
                      defaultChecked={selectPost?.type === "Disaster Relief"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Science & Innovation"
                      aria-label="Science & Innovation"
                      defaultChecked={
                        selectPost?.type === "Science & Innovation"
                      }
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Agriculture & Farming"
                      aria-label="Agriculture & Farming"
                      defaultChecked={
                        selectPost?.type === "Agriculture & Farming"
                      }
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Human Rights"
                      aria-label="Human Rights"
                      defaultChecked={selectPost?.type === "Human Rights"}
                    />
                    <input
                      className="btn"
                      type="radio"
                      name="type"
                      value="Animal Welfare"
                      aria-label="Animal Welfare"
                      defaultChecked={selectPost?.type === "Animal Welfare"}
                    />
                  </div>
                </fieldset>
                {/*  Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend">
                    Application Deadline
                  </legend>

                  <input
                    type="date"
                    name="applicationDeadline"
                    defaultValue={selectPost?.applicationDeadline}
                    className="input"
                  />
                </fieldset>

                {/* Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend">Description</legend>

                  <textarea
                    className="textarea textarea-ghost"
                    name="description"
                    defaultValue={selectPost?.description}
                    placeholder="Type Here"
                  ></textarea>
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend">Volunteers Needed</legend>

                  <input
                    type="number"
                    name="volunteersNeeded"
                    defaultValue={selectPost?.volunteersNeeded}
                    className="input"
                  />
                </fieldset>

                {/* HR Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                  <legend className="fieldset-legend">HR Info</legend>

                  <label className="label">HR Name</label>
                  <input
                    type="text"
                    name="hr_name"
                    className="input"
                    defaultValue={user.displayName}
                    placeholder="HR Name"
                  />

                  <label className="label">HR Email</label>
                  <input
                    type="text"
                    name="hr_email"
                    className="input"
                    defaultValue={user.email}
                    placeholder="HR Email"
                  />
                </fieldset>

                <input
                  type="submit"
                  className="btn btn-outline btn-primary hover:shadow-2xl hover:shadow-gray-500 w-xs rounded-tr-full rounded-bl-full flex mx-auto mt-4"
                  value="Update Post"
                />
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCreatedPostList;
