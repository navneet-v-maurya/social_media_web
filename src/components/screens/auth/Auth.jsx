import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../../../styles/Auth.css";

const SigniIn = lazy(() => import("./Signin"));
const Register = lazy(() => import("./Register"));

const Auth = () => {
  return (
    <div className="auth">
      <div>Logo</div>
      <Routes>
        <Route path="signin" element={<SigniIn />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/signin" />} />
      </Routes>
    </div>
  );
};

export default Auth;
