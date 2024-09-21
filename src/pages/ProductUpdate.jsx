import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../components/common/InputForm";
import SelectForm from "../components/common/SelectForm";
import Textarea from "../components/common/TextareaForm";
import UpdateImageForm from "../components/common/UpdateImageForm";
import React, { useState, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../components/specific/ProductContext";

function ProductCreate() {
  const navigate = useNavigate();
  const { setProducts } = useContext(ProductContext); // Access the context

  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    rating: "",
    order: "",
    sales: "",
    photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1X-AN3kFs-XAzQU5uTMgBv7IXiWaT-L7zeQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCloz5TjyiS5rNPwFn-CnRl6TnV0cnBWBlMQ&s"]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use POST for creating a new product
    axios.post("http://127.0.0.1:8000/api/products", formData)
      .then((response) => {
        if (response && response.data) {
          // Add the newly created product to the context
          setProducts((prevProducts) => [...prevProducts, response.data]);
          console.log("Product Created:", response.data);
          navigate("/product");  // Navigate back to the product page
        } else {
          console.error("Unexpected API Response:", response);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server Error:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error during Axios request:", error.message);
        }
      });
  };

  return (
    <div>
      <div className="flex justify-between w-full rounded-lg items-center p-5 bg-base-100">
        <h1 className="text-xl font-semibold">Create Product</h1>
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
              <span>Product Create</span>
            </div>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
          <h1 className="text-xl font-semibold">Create New Product</h1>
          <InputForm onChange={handleChange} className="w-full" title={"TITLE"} name={"title"} />
          <Textarea onChange={handleChange} className="w-full h-48" name={"paragraph"} title={"DESCRIPTION"} />
          <div className="grid grid-rows-3 grid-flow-col gap-3">
            <InputForm onChange={handleChange} name={"price"} title={"PRICE"} className="w-full" />
            <InputForm onChange={handleChange} title={"PRODUCT STOCK"} name={"stock"} className="w-full" />
            <InputForm onChange={handleChange} title={"Rating"} name={"rating"} className="w-full" />
            <InputForm onChange={handleChange} title={"Sale"} name={"sales"} className="w-full" />
            <InputForm onChange={handleChange} title={"Order"} name={"order"} className="w-full" />
            <InputForm onChange={handleChange} title={"BRAND"} name={"brand"} className="w-full" />
            <SelectForm onChange={handleChange} title={"CATEGORY"} name={"category"} className="w-full" />
          </div>
        </div>
        <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
          <UpdateImageForm onChange={handleChange} name="photos" />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 w-full flex items-center justify-center gap-2 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <FaCloudUploadAlt className="w-7 h-7" />
          <h1>Create Product</h1>
        </button>
      </form>
    </div>
  );
}

export default ProductCreate;
