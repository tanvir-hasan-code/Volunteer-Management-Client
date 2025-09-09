import React  from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useTitle } from "../../../Hooks/useTitle";
import UseAuth from "../../../Hooks/Auth/useAuth";

const Register = () => {
	useTitle('Register')
	const { createUser, signInWithGoogle } = UseAuth();
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const continueToGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Create Successfully!",
          showConfirmButton: false,
          timer: 1500,
        })
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "User Create Failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, photo, password } = Object.fromEntries(
      formData.entries()
    );
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Has been Created Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from);
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "User Create Failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100  max-w-lg my-14 lg:my-0 shrink-0 shadow-2xl w-11/12 mx-auto md:w-full">
        <div className="card-body ">
          <h1 className="text-3xl text-center font-bold">
            Please Register now!
          </h1>
          <form onSubmit={handleSignUp} className="grid space-y-2">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              required
              placeholder="Password"
              minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
            />
            <input
              className="btn btn-success"
              type="submit"
              value="Register Now"
            />
          </form>
          <p className="text-center mt-4">
            Already have an account? Please{" "}
            <Link to={"/login"} className="text-blue-500 link link-hover">
              Login
            </Link>
          </p>
          <button
            onClick={continueToGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            SignUp with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
