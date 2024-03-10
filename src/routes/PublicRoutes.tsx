import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("../components/screens/auth/Auth"));

function PublicRoutes() {
  return (
    <Routes>
      <Route path="auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
}

export default PublicRoutes;
