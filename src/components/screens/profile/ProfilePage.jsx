//module imports
import { lazy } from "react";

//styles import
import "../../../styles/Home.css";

//component imports
const RightSideBar = lazy(() => import("../../common/RightSideBar"));
const Body = lazy(() => import("../../common/Body"));

const ProfilePage = () => {
  return (
    <div className="home">
      <Body />
      <RightSideBar />
    </div>
  );
};

export default ProfilePage;
