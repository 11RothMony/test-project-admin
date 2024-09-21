import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex w-full h-full justify-between">
      <div className="w-1/5 bg-yellow-300 block h-screen">
        <Sidebar />
      </div>
      <div className="w-4/5 flex-wrap h-full">
          <Header />
        <main className=" overflow-hidden hover:overflow-y-auto transition-all duration-800 bg-gray-100 rounded-lg h-[calc(100%_-_80px)] mt-[80px]  p-7 fixed  w-4/5 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
