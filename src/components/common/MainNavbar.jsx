import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { PiLockKeyOpenFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
function MainSidebar() {
  return (
    <div className="p-5 overflow-y-scroll h-full overflow-x-hidden">
      <ul className="menu ">
        <li>
          <details open>
              <summary className="rounded-lg py-3 w-56 bg-gray-100">
              <IoMdHome className="w-6 h-6" />
                Dashboard
              </summary>
            <ul className="mt-2">
              <Link to="/dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
            </ul>
          </details>
        </li>
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg py-3 w-56 bg-gray-100">
              <AiFillProduct className="w-6 h-6" />
                Product
              </summary>
            <ul className="mt-2">
              <Link to="/product">
                <li>
                  <a>Product List</a>
                </li>
              </Link>
              <Link to="/product-detail">
                <li>
                  <a>Product Detail</a>
                </li>
              </Link>
              <Link to="/product-update">
                <li>
                  <a>Product Update</a>
                </li>
              </Link>
            </ul>
          </details>
        </li>
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg py-3 w-56 bg-gray-100">
              <PiLockKeyOpenFill className="w-6 h-6" />
                Authentication
              </summary>
            <ul className="mt-2">
              <Link to="/register">
                <li>
                  <a>Register</a>
                </li>
              </Link>
              <Link to="/login">
                <li>
                  <a>Login</a>
                </li>
              </Link>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default MainSidebar;
