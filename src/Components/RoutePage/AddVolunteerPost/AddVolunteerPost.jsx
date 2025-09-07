import React from "react";
import Swal from "sweetalert2";
import { useTitle } from "../../../Hooks/useTitle";
import useAuth from "../../../Hooks/Auth/useAuth";

const AddVolunteerPost = () => {
  useTitle("Post-Volunteer");
  const { user } = useAuth();
  const handleAddVolunteerPost = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.post_owner = user.email;
    console.log(data, user);
  };

  return (
    <div className="w-11/12 mx-auto mb-10 root-font">
      <h1 className="font-bold text-4xl text-center my-4 playfair-font">
        Post a Volunteer
      </h1>
      <form onSubmit={handleAddVolunteerPost}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="Organizer"
            className="input"
            placeholder="Organizer name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Location"
          />

          <label className="label">Thumbnail</label>
          <input
            type="url"
            name="thumbnail"
            className="input"
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
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Health"
              aria-label="Health"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Education"
              aria-label="Education"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Communication"
              aria-label="Communication"
            />
            {/* start  */}
            <input
              className="btn"
              type="radio"
              name="type"
              value="Sports & Recreation"
              aria-label="Sports & Recreation"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Social Welfare"
              aria-label="Social Welfare"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Women & Children"
              aria-label="Women & Children"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Disaster Relief"
              aria-label="Disaster Relief"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Science & Innovation"
              aria-label="Science & Innovation"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Agriculture & Farming"
              aria-label="Agriculture & Farming"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Human Rights"
              aria-label="Human Rights"
            />
            <input
              className="btn"
              type="radio"
              name="type"
              value="Animal Welfare"
              aria-label="Animal Welfare"
            />
          </div>
        </fieldset>
        {/*  Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>

          <input type="date" name="applicationDeadline" className="input" />
        </fieldset>

        {/* Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Description</legend>

          <textarea
            className="textarea textarea-ghost"
            name="description"
            placeholder="Type Here"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Volunteers Needed</legend>

          <input type="number" name="volunteersNeeded" className="input" />
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
          value="Create Post"
        />
      </form>
    </div>
  );
};

export default AddVolunteerPost;
