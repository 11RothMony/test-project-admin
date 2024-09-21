import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useParams,  useNavigate } from "react-router-dom";
import InputForm from "../components/common/InputForm";
import SelectForm from "../components/common/SelectForm";
import StarRating from "../components/common/StarRating";
import Textarea from "../components/common/TextareaForm";
import UpdateImageForm from "../components/common/UpdateImageForm";
import { ProductContext } from "../components/specific/ProductContext";

const EditProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For redirecting after successful update
  const { updateProduct } = useContext(ProductContext); // Get context to update product
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
    photos: []
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`).then((response) => {
      setFormData(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/products/${id}`, formData).then((response) => {
      console.log("Product Updated:", response.data);
      updateProduct(response.data); // Update the product globally
       // Redirect to the product list page
       navigate("/product");
    });
  };

  return (
    <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
      <h1 className="text-xl font-semibold">Edit Information</h1>
      <form onSubmit={handleSubmit} >
      <InputForm
        name="title"
        className="w-full"
        title="TITLE"
        value={formData.title} // Use value here
        onChange={handleChange}
      />
        <Textarea
          className="w-full h-48"
          title="DESCRIPTION"
          name="paragraph"
          value={formData.paragraph}
          onChange={handleChange}
        />
        <div className="grid grid-rows-3 grid-flow-col gap-3">
          <InputForm
            title="PRICE"
            name="price"
            className="w-full"
            value={formData.price}
            onChange={handleChange}
          />
          <InputForm
            title="OLD PRICE"
            className="w-full"
            value={(formData.price * 1.1).toFixed(2)}
          />
          <SelectForm
            title="CATEGORY"
            name="category"
            className="w-full"
            value={formData.category}
            onChange={handleChange}
          />
          <InputForm
            title="formData STOCK"
            name="stock"
            className="w-full"
            value={formData.stock}
            onChange={handleChange}
          />
          <InputForm
            title="BRAND"
            name="brand"
            className="w-full"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-semibold">Ratings</h1>
          <StarRating
            rating={formData.rating}
            name="rating"
            className="w-5 h-5"
            onChange={handleChange}
          />
        </div>
        <div className="w-full gap-5 mt-5 p-5 rounded-lg bg-base-100">
          <UpdateImageForm
            defaultPhotos={formData.photos}
            onChange={handleChange}
            name={"photos"}
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 w-full flex items-center justify-center gap-2 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <FaCloudUploadAlt className="w-7 h-7" />
          <h1>Update Images</h1>
        </button>
      </form>
    </div>
  );
};
export default EditProduct;
// { products, setProducts }