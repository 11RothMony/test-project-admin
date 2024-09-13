import React, { useContext } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductContext } from "../specific/ProductContext";
import Search from "./Search";
import SelectForm from "./SelectForm";
import StarRating from "./StarRating";
import axios from "axios";

const ProductTable = () => {
  // Access products and setProducts from context once
  const { products, setProducts } = useContext(ProductContext); 

  // Function to handle product deletion
  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/products/${productId}`)
        .then((response) => {
          if (response.status === 200) {
            // Remove the deleted product from the state
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== productId)
            );
            console.log(`Product with ID ${productId} deleted`);
          }
        })
        .catch((error) => {
          console.error("There was an error deleting the product!", error);
        });
    }
  };

  return (
    <div>
      <div className="bg-base-100 mt-5 shadow-gray-300 shadow-lg rounded-lg">
        <div className="flex justify-between items-center px-5">
          <h1 className="text-black font-bold text-xl">
            Best selling products
          </h1>
          <div className="flex gap-2 items-center">
            <Search />
            <SelectForm className="w-28 mb-4" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead className="bg-blue-500 rounded-none text-white h-14">
              <tr>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>RATING</th>
                <th>ORDER</th>
                <th>SALES</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products &&  products.length > 0 ? (
              products.map((product,index) => (
                <tr  key={product.id}>
                  <th>{product.id}</th>
                  <td className="h-24">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask h-14 w-14 rounded-lg">
                          {Array.isArray(product.photos) &&
                          product.photos.length > 0 ? (
                            <img
                              className="object-cover"
                              src={product.photos[0]}
                              alt={product.title}
                            />
                          ) : (
                            <img
                              className="object-cover"
                              src={product.photos}
                              alt={product.title}
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          {product.paragraph}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <del>${(product.price * 1.1).toFixed(2)}</del>
                    <br />
                    <span className="text-red-500">
                      ${product.price}
                    </span>
                  </td>
                  <td>{product.stock}</td>
                  <td>
                    <StarRating rating={product.rating} className="w-4 h-4" />
                  </td>
                  <td>{product.order}</td>
                  <td>${(product.sales * 1000).toLocaleString()}</td>
                  <td>
                    <div className="flex gap-1">
                      <Link to={`/product-detail/${product.id}`}>
                        <button className="btn bg-violet-300 p-2">
                          <FaEye className="w-4 h-4" />
                        </button>
                      </Link>
                      <Link to={`/edit-product/${product.id}`}>
                        <button className="btn bg-blue-300 p-2">
                          <FaPen className="w-4 h-4"/>
                        </button>
                      </Link>
                      <button onClick={() => handleDelete(product.id)} className="btn bg-red-300 p-2">
                        <MdDelete className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ):(
              <tr>
                <td colSpan="10" className="text-center p-5">
                  No products available
                </td>
              </tr>
            )}
            </tbody>
            <tfoot className="h-14">
              <tr>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th> STOCK</th>
                <th> RATING</th>
                <th> ORDER</th>
                <th> SALES</th>
                <th> ACTION</th>
              </tr>
            </tfoot>
          </table>
          <div className="join flex justify-center py-5">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
