//module imports
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

//component imports
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  const auth = useSelector((state) => state.auth);

  if (auth.loading) {
    return <div> Loadingggg.........</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer
        pauseOnFocusLoss={false}
        position="top-center"
        pauseOnHover={false}
        autoClose={2000}
      />
      <BrowserRouter>
        {auth.logged_in ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
