import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../../../styles/Auth.css";
import Logo from "../../../assets/logo_transparent.png";

const SigniIn = lazy(() => import("./Signin"));
const Register = lazy(() => import("./Register"));

const Auth = () => {
  return (
    <div className="auth">
      <img className="logo" src={Logo} alt="" />

      <Routes>
        <Route path="signin" element={<SigniIn />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/signin" />} />
      </Routes>
    </div>
  );
};

export default Auth;
