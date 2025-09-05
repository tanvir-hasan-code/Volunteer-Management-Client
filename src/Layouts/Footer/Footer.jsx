import React from "react";
import { FaPhoneAlt, FaServicestack } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
	  <div className="bg-[#064232]">
		  <footer className="footer text-white sm:footer-horizontal  text-base-content p-10 pb-5">
      <div className="items-center mx-auto md:mx-0">
        <img
          className="w-16 rounded-full mx-auto ml-8 md:m-0"
          src="https://i.ibb.co.com/DDnLCLmv/Screenshot-2.png"
          alt=" Company-Logo"
        />

        <span>
          <h1 className="text-2xl font-bold text-blue-500"> ᐯOᒪᑌᑎIᖴY</h1>
          <p className="">Volunify Company LTD.</p>
        </span>
      </div>
      <nav>
        <h6 className="footer-title">About us</h6>
        <a className="link link-hover flex items-center gap-2"><FaPhoneAlt size={15}/> +8801500000000</a>
        <a className="link link-hover flex items-center gap-2"><MdAttachEmail size={15}/> xyz@gmail.com</a>
        <a className="link link-hover flex items-center gap-2"><FaServicestack size={15}/>24/7 Our Services</a>
			  <a className="link link-hover flex items-center gap-2"><ImLocation size={15} />Rajshahi, Dhaka Bangladesh</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.twitter.com" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
		  </nav>
	  </footer>
		  <div className=" py-4 text-center">
			  <p className="text-center text-gray-300 text-sm md:text-shadow-md">&copy; {new Date().getFullYear()} Volunify. All rights reserved.</p>
	  </div>
	  </div>
	  
  );
};

export default Footer;
