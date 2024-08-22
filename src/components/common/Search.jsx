import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <div>
      <label className="input relative w-64 h-11 input-bordered flex items-center gap-2">
        <IoSearchSharp className="absolute "/>
        <input type="text" className="grow px-6" placeholder="Search" />
      </label>
      </div>
  );
}

export default Search;
