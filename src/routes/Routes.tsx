import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Routes() {
  const user = {};

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer
        pauseOnFocusLoss={false}
        position="top-center"
        pauseOnHover={false}
        autoClose={2000}
      />
      <BrowserRouter>
        {user ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
