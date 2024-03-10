import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../components/screens/home/Home"));

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default PrivateRoutes;
