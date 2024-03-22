//module imports
import { lazy } from "react";

//component imports
const TopBar = lazy(() => import("./TopBar"));

const PostsContainer = () => {
  return (
    <div className="middle">
      <TopBar />
      <div className="body">
        <div>stories</div>
        <div>postss</div>
      </div>
    </div>
  );
};

export default PostsContainer;
