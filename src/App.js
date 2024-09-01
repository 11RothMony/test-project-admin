// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import AppLayout from "./components/specific/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import ProductUpdate from "./pages/ProductUpdate";
import Register from "./pages/Register";
import EditProduct from "./pages/EditProduct";
const productList = [
  {
    id: 1,
    photos: [
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/d3e38fd0-8f27-11ea-8ae8-f2bb77015e6f.jpg",
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/02e77962-b170-11ea-9203-1a0a8a61af59.jpg", // Add your second photo URL here
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCZOIFg_AAIxHrOcQxBCoPafc1vOGQTScLA&s", // Add your third photo URL here
    ],
    title: "Ultra HD 4K TV",
    paragraph:
      "Experience vivid colors and sharp details with this 55-inch Ultra HD 4K TV.",
    category: "Electronics",
    brand: "VisionTech",
    price: 799.99,
    stock: 35,
    rating: 4.7,
    order: 60,
    sales: 50,
  },
  {
    id: 2,
    photos: [
      "https://www.artis.in/cdn/shop/products/1_f5b3377c-c870-420f-bc6a-5cd4b3a5a7c7.jpg?v=1653639993",
      "https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg",
    ],
    title: "Bluetooth Speaker",
    paragraph:
      "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
    category: "Audio",
    brand: "SoundWave",
    price: 49.99,
    stock: 120,
    rating: 4.4,
    order: 90,
    sales: 85,
  },
  {
    id: 3,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3lVzsCiKxW41fO-XzLh_35IRIcJ8OsF2ag&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5E6LNQ9FvRdTkURtDQ5i7mpDdypSe9f0tw&s",
    ],
    title: "Smartphone X Pro",
    paragraph:
      "Latest model with a 6.7-inch display and advanced camera system.",
    category: "Mobile Phones",
    brand: "TechMax",
    price: 999.99,
    stock: 25,
    rating: 4.8,
    order: 100,
    sales: 95,
  },
  {
    id: 4,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsm-VBF7z4Yte4xuxAJPKlgGmqinoQJHuzQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9oscOJVihB0ZfOq4mhi4xXDGF8bDfUbIeA&s",
    ],
    title: "Gaming Console",
    paragraph:
      "Next-gen gaming console with 1TB storage and ultra-fast load times.",
    category: "Gaming",
    brand: "GameStation",
    price: 499.99,
    stock: 45,
    rating: 4.9,
    order: 150,
    sales: 140,
  },
  {
    id: 5,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N7YbohJzSUCkeS6voj097z2Po1TmtuyhKA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o1MulM2XNFVC-mnY-yV0QniXHIZM0syHgg&s",
    ],
    title: "Wireless Earbuds",
    paragraph: "Noise-cancelling wireless earbuds with 24-hour battery life.",
    category: "Audio",
    brand: "ClearSound",
    price: 129.99,
    stock: 85,
    rating: 4.5,
    order: 130,
    sales: 120,
  },
  {
    id: 6,
    photos: [
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/d3e38fd0-8f27-11ea-8ae8-f2bb77015e6f.jpg",
      "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/02e77962-b170-11ea-9203-1a0a8a61af59.jpg", // Add your second photo URL here
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCZOIFg_AAIxHrOcQxBCoPafc1vOGQTScLA&s", // Add your third photo URL here
    ],
    title: "Ultra HD 4K TV",
    paragraph:
      "Experience vivid colors and sharp details with this 55-inch Ultra HD 4K TV.",
    category: "Electronics",
    brand: "VisionTech",
    price: 799.99,
    stock: 35,
    rating: 4.7,
    order: 60,
    sales: 50,
  },
  {
    id: 7,
    photos: [
      "https://www.artis.in/cdn/shop/products/1_f5b3377c-c870-420f-bc6a-5cd4b3a5a7c7.jpg?v=1653639993",
      "https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg",
    ],
    title: "Bluetooth Speaker",
    paragraph:
      "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
    category: "Audio",
    brand: "SoundWave",
    price: 49.99,
    stock: 120,
    rating: 4.4,
    order: 90,
    sales: 85,
  },
  {
    id: 8,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3lVzsCiKxW41fO-XzLh_35IRIcJ8OsF2ag&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5E6LNQ9FvRdTkURtDQ5i7mpDdypSe9f0tw&s",
    ],
    title: "Smartphone X Pro",
    paragraph:
      "Latest model with a 6.7-inch display and advanced camera system.",
    category: "Mobile Phones",
    brand: "TechMax",
    price: 999.99,
    stock: 25,
    rating: 4.8,
    order: 100,
    sales: 95,
  },
  {
    id: 9,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsm-VBF7z4Yte4xuxAJPKlgGmqinoQJHuzQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9oscOJVihB0ZfOq4mhi4xXDGF8bDfUbIeA&s",
    ],
    title: "Gaming Console",
    paragraph:
      "Next-gen gaming console with 1TB storage and ultra-fast load times.",
    category: "Gaming",
    brand: "GameStation",
    price: 499.99,
    stock: 45,
    rating: 4.9,
    order: 150,
    sales: 140,
  },
  {
    id: 10,
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N7YbohJzSUCkeS6voj097z2Po1TmtuyhKA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o1MulM2XNFVC-mnY-yV0QniXHIZM0syHgg&s",
    ],
    title: "Wireless Earbuds",
    paragraph: "Noise-cancelling wireless earbuds with 24-hour battery life.",
    category: "Audio",
    brand: "ClearSound",
    price: 129.99,
    stock: 85,
    rating: 4.5,
    order: 130,
    sales: 120,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route
            path="dashboard"
            element={<Dashboard productList={productList} />}
          />
          <Route
            path="product"
            element={<Product productList={productList} />}
          />
          <Route
            path="product-detail/:productId"
            element={<ProductDetail productList={productList} />}
          />
          <Route
            path="/edit-product/:id"
            element={
              <EditProduct products={productList} setProducts={productList} />
            }
          />
          <Route path="product-update" element={<ProductUpdate />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
