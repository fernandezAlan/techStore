import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";
import "./App.css";
// Enum con las rutas
export enum RoutePaths {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT_DETAIL = "/products/:id",
  CART = "/cart",
  CHECKOUT = "/checkout",
  ORDERS = "/orders",
  PROFILE = "/profile",
  ADMIN_DASHBOARD = "/admin",
  ADMIN_PRODUCTS = "/admin/products",
  ADMIN_ORDERS = "/admin/orders",
  LOGIN = "/login",
  REGISTER = "/register",
}

// Lazy loading de componentes
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Orders = lazy(() => import("./pages/Orders"));
const Profile = lazy(() => import("./pages/Profile"));
//const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
//const AdminProducts = lazy(() => import("./pages/admin/Products"));
//const AdminOrders = lazy(() => import("./pages/admin/Orders"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path={RoutePaths.HOME} element={<Home />} />
          <Route path={RoutePaths.PRODUCTS} element={<Products />} />
          <Route path={RoutePaths.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={RoutePaths.CART} element={<Cart />} />
          <Route path={RoutePaths.CHECKOUT} element={<Checkout />} />
          <Route path={RoutePaths.ORDERS} element={<Orders />} />
          <Route path={RoutePaths.PROFILE} element={<Profile />} />
          <Route path={RoutePaths.LOGIN} element={<Login />} />
          <Route path={RoutePaths.REGISTER} element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;