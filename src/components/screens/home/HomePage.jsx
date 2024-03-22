//module imports
import { lazy } from "react";

//styles import
import "../../../styles/Home.css";

//component imports
const RightSideBar = lazy(() => import("../../common/RightSideBar"));
const PostsContainer = lazy(() => import("../../common/PostsContainer"));

const HomePage = () => {
  return (
    <div className="home">
      <PostsContainer />
      <RightSideBar />
    </div>
  );
};

export default HomePage;
