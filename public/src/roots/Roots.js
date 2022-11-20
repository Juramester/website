import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import FurnitureDetails from "../pages/FurnitureDetails";
import LogIn from "../pages/LogIn";
import Qrcodes from "../pages/Qrcodes";
import SignUp from "../pages/SignUp";
import Furnitures from "../pages/Furnitures";
import Cart from "../pages/Cart";
import ProtectedRoute from "./ProtectedRoute";

const Roots = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="qrcodes" element={<Qrcodes />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="furnitures" element={<Furnitures />} />
      <Route path="furnitures/:id" element={<FurnitureDetails />} />
      <Route path="cart" element={<Cart />} />

      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Roots;
