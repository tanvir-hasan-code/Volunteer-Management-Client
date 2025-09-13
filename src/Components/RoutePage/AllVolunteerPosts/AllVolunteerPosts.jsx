import React, { useEffect, useState } from "react";
import { useTitle } from "../../../Hooks/useTitle";
import axios from "axios";
import AllVolunteerPostCard from "./AllVolunteerPostCard";
import { Grid3x3, LucideTableOfContents } from "lucide-react";
import useSearch from "../../../Hooks/useSearch/useSearch";
import useAuth from "../../../Hooks/Auth/useAuth";

const AllVolunteerPosts = () => {
  useTitle("All-Post");
  const { theme } = useAuth();
  const [volunteerPost, setVolunteerPost] = useState([]);
  const [isTable, setTable] = useState(() => {
    const stored = localStorage.getItem("isTable");
    return stored ? stored === "true" : false;
  });
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const keyWordQuarry = useSearch(query, 400);
  const isSearching = keyWordQuarry.trim() !== "";
  const displayPosts = results.length > 0 ? results : volunteerPost;

  useEffect(() => {
    if (keyWordQuarry.trim() !== "") {
      axios
        .get(
          `https://volunteer-management-server-7r6vgdbld.vercel.app/search?q=${keyWordQuarry}`
        )
        .then((res) => setResults(res.data))
        .catch((err) => console.log("Search Error:", err));
    } else {
      setResults([]);
    }
  }, [keyWordQuarry]);

  useEffect(() => {
    axios
      .get(
        "https://volunteer-management-server-7r6vgdbld.vercel.app/allVolunteerPosts"
      )
      .then((res) => {
        setVolunteerPost(res.data);
        setLoading(false);
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

  // Table Button
  const handleTableClick = () => {
    setTable(true);
    localStorage.setItem("isTable", "true");
  };

  // Grid button
  const handleGridClick = () => {
    setTable(false);
    localStorage.setItem("isTable", "false");
  };

  return (
    <div className={`${theme === "light" ? "bg-[#568F87]" : ""}`}>
      <h1 className="text-2xl lg:text-3xl text-center playfair-font pt-4 md:pt-5  text-white font-bold">
        All Volunteer Need Post
      </h1>
      <div className="flex justify-between w-11/12 mx-auto mt-5">
        {/* Search Functionality  */}
        <div>
          <label className="input h-7 w-32 md:w-72 md:h-10">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className={`${theme === "light" ? "" : ""}`}
              type="search"
              required
              placeholder="Search volunteers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        {/* Table and Grid  */}
        <div
          className={`flex gap-3 ${
            theme === "light" ? "bg-white" : "bg-gray-400"
          }  w-fit px-3 py-2 rounded-full`}
        >
          <button
            className={`${
              isTable ? "" : "bg-gray-500 text-white p-1 rounded-3xl"
            } ${theme === "light" || isTable ? "" : " bg-gray-900"}`}
            onClick={handleGridClick}
          >
            <Grid3x3 size={20} />
          </button>
          <button
            className={`${
              !isTable ? "" : "bg-gray-500 text-white p-1 rounded-3xl"
            } ${theme === "light" || !isTable ? "" : " bg-gray-900"}`}
            onClick={handleTableClick}
          >
            <LucideTableOfContents size={20} />
          </button>
        </div>
      </div>
      <div
        className={`grid ${
          isTable ? `grid-cols-1` : `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
        } py-10  w-11/12 mx-auto gap-5`}
      >
        {isSearching && results.length === 0 ? (
          <p className="text-center text-white col-span-4">No posts found</p>
        ) : (
          displayPosts.map((post, i) => (
            <AllVolunteerPostCard post={post} key={i} isTable={isTable} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllVolunteerPosts;
