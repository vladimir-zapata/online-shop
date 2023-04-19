import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";
import Orders from "../pages/Orders";
import Admin from "../pages/Admin";

import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuthenticated={false}>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute isAuthenticated={false}>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute isAuthenticated={false}>
            <ShoppingCart />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
