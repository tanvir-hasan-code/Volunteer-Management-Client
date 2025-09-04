import React from "react";
import { IoHome } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

const ErrorPage = () => {
	useTitle('Error-Page')
	const navigate = useNavigate();
  return (
    <div className="relative w-10/12 mx-auto min-h-screen  flex items-center root-font">
		  <img 
			  className="w-full rounded-t-full lg:rounded-sm"
        src="https://i.ibb.co.com/pB8F7zfC/diseno-web-404.gif"
        alt="Page Error"
      />
      <div className="absolute w-full z-10  flex justify-between mt-72 lg:-mb-80">
		<Link ><button onClick={()=>{navigate(-1)}} className="btn btn-sm md:btn-md btn-primary"><TiArrowBack/> Back </button></Link>
        <Link to={'/'}>
          <button className="btn btn-sm md:btn-md btn-primary">Back To Home <IoHome /></button>
        </Link>
		  </div>
		  <div className="absolute w-full flex justify-center items-start min-h-screen mt-20">
			  <h1 className="text-3xl md:text-4xl font-bold ">Page Not Found</h1>
		  </div>
    </div>
  );
};

export default ErrorPage;
