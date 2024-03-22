//module imports
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//component imports
const Auth = lazy(() => import("../components/screens/auth/Auth"));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
};

export default PublicRoutes;
