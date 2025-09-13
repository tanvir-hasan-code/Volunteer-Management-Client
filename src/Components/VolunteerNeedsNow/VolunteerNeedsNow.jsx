import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import VolunteerNeedsNowCards from "./VolunteerNeedsNowCards";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";
import useAuth from "../../Hooks/Auth/useAuth";

const VolunteerNeedsNow = () => {
  const [needPost, setNeedPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/needsNow-post").then((res) => {
      setNeedPost(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className={`${theme === 'light'? 'bg-[#568F87]': ""} loading flex mx-auto`}></p>;
  }

  return (
    <div className={`${theme === 'light'? "bg-[#568F87]": ""}`}>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl text-white font-bold playfair-font text-center md:p-16 ">
          <Typewriter
            words={["Opportunities Closing Soon"]}
            loop={1}
            cursor
            cursorStyle="....."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
          {needPost.map((post, i) => (
            <VolunteerNeedsNowCards key={i} post={post} />
		  ))}
        </div>
			<Link to={`/allVolunteerPosts`} className="btn btn-primary rounded-full w-5/12 mx-auto flex ">See All</Link>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
