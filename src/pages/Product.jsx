import React from "react";
import ProductTable from "../components/common/ProductTable";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import BoxProduct from "../components/common/BoxProduct";

function Product() {
  return (
    <div>
      <div className="flex justify-between w-full rounded-lg  items-center p-5 bg-base-100">
        <h1 className="text-xl font-semibold">Products List</h1>
        <div className="flex gap-2 items-center">
          <Link>
            <div className="rounded-lg px-4 py-2 flex bg-gray-100">
              <IoMdHome className="w-6 h-6" />
              <span>Dashboard</span>
            </div>
          </Link>
          <span className="font-bold text-xl"> ~ </span>
          <Link>
            <div className="rounded-lg px-4 py-2 flex bg-gray-100">
              <span>Products</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <BoxProduct
          title={"Total Orders"}
          number={"207"}
          icon="user"
          gradient="greenToTeal"
        />
        <BoxProduct
          title={"Total Orders"}
          number={"137"}
          icon="cart"
          gradient="redToYellow"
        />
        <BoxProduct
          title={"Total Orders"}
          number={"277"}
          icon="bag"
          gradient="blueToPurplew"
        />
      </div>
      <ProductTable/>
    </div>
  );
}

export default Product;
