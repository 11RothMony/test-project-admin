import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";

function Register() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <div className=" w-full flex justify-center">
              <Logo width="70px" height="70px" />
            </div>
            <div className="font-bold text-gray-500 text-xl text-center">
              <span>Register a new account</span>
            </div>
            <div className="mt-3 card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <input
                    type="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-2">
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="input input-bordered"
                    required
                  />
                  <div className="flex items-center gap-2 text-gray-400 mt-2">
                    <input className="w-4 h-4" type="checkbox" required />
                    <span>I agree to the all Terms & Condition</span>
                  </div>
                </div>
                <div className="form-control mt-1">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div class="relative flex py-1 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                  <span class="flex-shrink mx-4 text-gray-400">Or</span>
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <button className="btn btn-outline text-gray-400 bg-none">
                  <FcGoogle className="w-7 h-7" />
                  <span className="text-blue-600">Sign in with Google</span>
                </button>
              </form>
            </div>
            <div className="mt-2 card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
            <div className="flex justify-center py-3 gap-2 items-center">
               <p>Don't have an account</p>
               <Link to='/login'>
                  <span className="text-blue-600 text-lg font-semibold">Login</span>
               </Link>
            </div>
        </div>
          </div>
          <div className="text-center lg:text-left w-[650px]">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/dashboard">
              <button className="btn btn-active px-5 btn-primary">
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
