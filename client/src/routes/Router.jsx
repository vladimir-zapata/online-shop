import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";
import Orders from "../pages/Orders";
import Admin from "../pages/Admin";

import ProtectedRoute from "./ProtectedRoute";
import ProductDetails from "../pages/ProductDetails";

import { useSelector } from "react-redux";

const Router = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Admin />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/orders"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Orders />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/cart"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <ShoppingCart />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Router;
