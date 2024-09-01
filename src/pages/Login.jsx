import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "../components/common/Logo";

function Login() {
  return (
    <div className="h-screen w-screen bg-base-100 flex justify-center flex-wrap items-center">
      <div className="flex-wrap gap-5">
        <div className=" w-full flex justify-center">
          <Logo width="70px" height="70px" />
        </div>
        <div className="font-bold text-gray-500 text-xl text-center">
          <span>LOGIN FORM</span>
        </div>
        <div className="mt-3 card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-red-600 text-sm link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-primary">Login</button>
            </div>
            <div class="relative flex py-4 items-center">
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
            <Link to="/register">
              <span className="text-blue-600 text-lg font-semibold">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
