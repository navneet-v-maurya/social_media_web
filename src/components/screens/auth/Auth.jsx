//module imports
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//style imports
import "../../../styles/Auth.css";

//images imports
import Logo from "../../../assets/logo_transparent.png";

//component imports
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
