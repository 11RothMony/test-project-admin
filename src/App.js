
// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import AppLayout from './components/specific/AppLayout';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import ProductUpdate from './pages/ProductUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<AppLayout/>}>
        <Route index element={<Navigate replace to="dashboard"/>}/>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="product" element={<Product/>} />
        <Route path="product-detail" element={<ProductDetail/>} />
        <Route path="product-update" element={<ProductUpdate/>} />
      </Route>
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
