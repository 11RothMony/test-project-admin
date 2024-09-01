import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { PiLockKeyOpenFill } from "react-icons/pi";
import { HiBellAlert } from "react-icons/hi2";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
function MainSidebar() {
  return (
    <div className="p-5 overflow-y-scroll h-full overflow-x-hidden">
      <ul className="menu ">
        <Link to="/dashboard">
          <li>
            <summary className="rounded-lg py-3 w-56 text-lg font-medium bg-gray-100">
              <IoMdHome className="w-6 h-6" />
              <span>
                Dashboard
              </span>
            </summary>
          </li>
        </Link>
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg py-3 text-lg font-medium w-56 bg-gray-100">
              <AiFillProduct className="w-6 h-6" />
                Product
              </summary>
            <ul className="mt-2">
              <Link to="/product">
                <li>
                  <a>Product List</a>
                </li>
              </Link>
              <Link to="/product-detail/2">
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
              <summary className="rounded-lg py-3 text-lg font-medium w-56 bg-gray-100">
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
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg py-3 text-lg font-medium w-56 bg-gray-100">
              <HiBellAlert className="w-6 h-6" />
                Notifications
              </summary>
            <ul className="mt-2">
              <Link to="#">
                <li>
                  <a>Notifications</a>
                </li>
              </Link>
            </ul>
          </details>
        </li>
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg text-lg font-medium py-3 w-56 bg-gray-100">
              <RiMessage2Fill className="w-6 h-6" />
                Messages
              </summary>
            <ul className="mt-2">
              <Link to="#">
                <li>
                  <a>Message</a>
                </li>
              </Link>
            </ul>
          </details>
        </li>
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg py-3 text-lg font-medium w-56 bg-gray-100">
              <FaShoppingCart className="w-6 h-6" />
                Order
              </summary>
            <ul className="mt-2">
              <Link to="#">
                <li>
                  <a>Order</a>
                </li>
              </Link>
            </ul>
          </details>
        </li>
        <li className="mt-2">
          <details open>
              <summary className="rounded-lg py-3 text-lg font-medium w-56 bg-gray-100">
              <IoMdSettings className="w-6 h-6" />
                Settings
              </summary>
            <ul className="mt-2">
              <Link to="#">
                <li>
                  <a>Setting</a>
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
