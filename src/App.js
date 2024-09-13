// import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import AppLayout from "./components/specific/AppLayout";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import ProductUpdate from "./pages/ProductUpdate";
import Register from "./pages/Register";
import { ProductProvider } from "./components/specific/ProductContext";
// const productList = [
//   {
//     id: 1,
//     photos: [
//       "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/d3e38fd0-8f27-11ea-8ae8-f2bb77015e6f.jpg",
//       "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/02e77962-b170-11ea-9203-1a0a8a61af59.jpg", // Add your second photo URL here
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCZOIFg_AAIxHrOcQxBCoPafc1vOGQTScLA&s", // Add your third photo URL here
//     ],
//     title: "Ultra HD 4K TV",
//     paragraph:
//       "Experience vivid colors and sharp details with this 55-inch Ultra HD 4K TV.",
//     category: "Electronics",
//     brand: "VisionTech",
//     price: 799.99,
//     stock: 35,
//     rating: 4.7,
//     order: 60,
//     sales: 50,
//   },
// ];

function App() {
  return (
    <BrowserRouter>
    <ProductProvider>
      <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route
              path="dashboard"
              element={<Dashboard />}
            />
            <Route
              path="product"
              element={<Product/>}
            />
            <Route
              path="product-detail/:productId"
              element={<ProductDetail />}
            />
            <Route
              path="/edit-product/:id"
              element={
                <EditProduct />
              }
            />
            <Route path="product-update" element={<ProductUpdate />} />
          </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
