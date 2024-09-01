import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import InputForm from "../components/common/InputForm";
import SelectForm from "../components/common/SelectForm";
import StarRating from "../components/common/StarRating";
import Textarea from "../components/common/TextareaForm";
import UpdateImageForm from "../components/common/UpdateImageForm";

function ProductUpdate() {
  return (
    <div>
      <div className="flex justify-between w-full rounded-lg  items-center p-5 bg-base-100">
        <h1 className="text-xl font-semibold">Products Update</h1>
        <div className="flex gap-2 items-center">
          <Link>
            <div className="rounded-lg px-4 py-2 gap-2 flex bg-gray-100">
              <IoMdHome className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </div>
          </Link>
          <span className="font-bold text-xl"> ~ </span>
          <Link>
            <div className="rounded-lg px-4 py-2 flex font-medium bg-gray-100">
              <span>Products</span>
            </div>
          </Link>
          <span className="font-bold text-xl"> ~ </span>
          <Link>
            <div className="rounded-lg px-4 py-2 font-medium flex bg-gray-100">
              <span>Product Update</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
        <h1 className="text-xl font-semibold">Basic Information</h1>
        <InputForm className="w-full" title={"TITLE"} />
        <Textarea className="w-full h-48" title={"DESCRIPTION"} />
        <div class="grid grid-rows-3 grid-flow-col gap-3 ">
          <InputForm title={"PRICE"} className="w-full" />
          <InputForm title={"OLD PRICE"} className="w-full" />
          <InputForm title={"PRODUCT STOCK"} className="w-full" />
          <InputForm title={"BRAND"} className="w-full" />
          <InputForm title={"DISCOUNT"} className="w-full" />
          <SelectForm title={"CATEGORY"} className="w-full" />
          <SelectForm title={"SUBCATEGORY"} className="w-full" />
          <SelectForm title={"IS FEATURED"} className="w-full" />
          <SelectForm title={"PRODUCT RAMS"} className="w-full" />
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-semibold">Ratings</h1>
          <StarRating rating={4} className="w-5 h-5" />
        </div>
      </div>
      <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
        <UpdateImageForm />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 w-full flex items-center justify-center gap-2 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <FaCloudUploadAlt className="w-7 h-7" />
        <h1>Update Images</h1>
      </button>
    </div>
  );
}

export default ProductUpdate;
