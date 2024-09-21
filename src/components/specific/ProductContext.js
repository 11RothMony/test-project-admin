// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create ProductContext
export const ProductContext = createContext();

// Create Provider Component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products initially
    axios.get("http://127.0.0.1:8000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };
  
  return (
    <ProductContext.Provider value={{ products, setProducts, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
