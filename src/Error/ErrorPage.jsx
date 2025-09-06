import React from "react";
import { IoHome } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate } from "react-router";
import { useTitle } from "../Hooks/useTitle";

const ErrorPage = () => {
	useTitle('Error-Page')
	const navigate = useNavigate();
  return (
    <div className="relative w-10/12 lg:w-8/12 mx-auto min-h-screen  flex items-center root-font">
		  <img 
			  className="w-full rounded-t-full lg:rounded-lg lg:h-[500px] lg:w-[2000px] object-cover"
        src="https://syhzhuelbxgnhopnwjgc.supabase.co/storage/v1/object/public/media/blog/404_page_cover.jpg"
        alt="Page Error"
      />
      <div className="absolute w-full z-10  flex justify-between mt-72 lg:mt-56 md:mt-96 lg:-mb-80">
		<Link ><button onClick={()=>{navigate(-1)}} className="btn btn-sm md:btn-md btn-primary"><TiArrowBack/> Back </button></Link>
        <Link to={'/'}>
          <button className="btn btn-sm md:btn-md btn-primary">Back To Home <IoHome /></button>
        </Link>
		  </div>
    </div>
  );
};

export default ErrorPage;
