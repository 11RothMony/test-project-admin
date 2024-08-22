import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import Search from "../common/Search";
import { Link } from "react-router-dom";

function Header() {

  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-between h-[80px] p-5 items-center w-4/5 bg-base-100 fixed z-40">
      <div className="flex gap-5 ">
        <button className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
          <MdOutlineMenuOpen className="w-6 h-6" />
        </button>
        <Search />
      </div>
      <div className="flex gap-3 ">
        <button className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
          <CgDarkMode className="w-6 h-6" />
        </button>
        <button className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
          <FaShoppingCart className="w-6 h-6" />
        </button>
        <button className="bg-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
          <RiMessage2Fill className="w-6 h-6" />
        </button>
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="bg-gray-100 rounded-full p-3">
            <HiBellAlert className="w-6 h-6" />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-80  shadow"
          >
            <div className="">
              <h1 className="p-3 text-lg font-bold">Orders 12</h1>
              <hr></hr>
            </div>
            <li>
              <div className="flex mt-3 rounded-none bg-gray-100">
                <div className=" w-16 p-0.5 h-10 rounded-full border mb-7 border-blue-600 ">
                  <img
                    src="https://t4.ftcdn.net/jpg/04/30/11/17/360_F_430111702_DcBX4q0VE9CZZzyMG42FzoXHdHwM7SfA.jpg"
                    alt="profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="flex-wrap">
                  <p className="px-1 text-sm "><b>ROTHMONY</b> add to his favorite list 
                  <b> Leather belt steve madden</b>
                  <p className="text-blue-700 font-medium">few seconds ago</p>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex rounded-none bg-gray-100">
                <div className=" w-16 p-0.5 h-10 rounded-full border mb-7 border-blue-600 ">
                  <img
                    src="https://t4.ftcdn.net/jpg/04/30/11/17/360_F_430111702_DcBX4q0VE9CZZzyMG42FzoXHdHwM7SfA.jpg"
                    alt="profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="flex-wrap">
                  <p className="px-1 text-sm "><b>ROTHMONY</b> add to his favorite list 
                  <b> Leather belt steve madden</b>
                  <p className="text-blue-700 font-medium">few seconds ago</p>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex rounded-none bg-gray-100">
                <div className=" w-16 p-0.5 h-10 rounded-full border mb-7 border-blue-600 ">
                  <img
                    src="https://t4.ftcdn.net/jpg/04/30/11/17/360_F_430111702_DcBX4q0VE9CZZzyMG42FzoXHdHwM7SfA.jpg"
                    alt="profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="flex-wrap">
                  <p className="px-1 text-sm "><b>ROTHMONY</b> add to his favorite list 
                  <b> Leather belt steve madden</b>
                  <p className="text-blue-700 font-medium">few seconds ago</p>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {
          isLogin !== true ? 
          <Link to='/login'>
            <button className="btn btn-active btn-primary">Login</button> 
          </Link>          
          :
          <div className="dropdown dropdown-hover">
          <button
            tabIndex={0}
            className=" hover:bg-gray-200 flex items-center rounded-full p-1"
          >
            <div className=" w-11 h-11 rounded-full border flex border-blue-600 p-0.5 ">
              <img
                src="https://t4.ftcdn.net/jpg/04/30/11/17/360_F_430111702_DcBX4q0VE9CZZzyMG42FzoXHdHwM7SfA.jpg"
                alt="profile"
                className="rounded-full w-full h-full "
              />
            </div>
            <div className="flex-wrap">
              <h3 className="px-1 text-sm font-medium">ROTHMONY</h3>
              <p className="px-1 text-sm ">rothmony@gmail.com</p>
            </div>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gray-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>MY Account</a>
            </li>
            <li>
              <a>Reset Password</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
          </div>
        }      
      </div>
    </div>
  );
}

export default Header;
