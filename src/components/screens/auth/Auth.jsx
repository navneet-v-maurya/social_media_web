import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../../../styles/Auth.css";

const SigniIn = lazy(() => import("./Signin"));
const Register = lazy(() => import("./Register"));

function Auth() {
  return (
    <Routes>
      <Route path="signin" element={<SigniIn />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
}

export default Auth;
