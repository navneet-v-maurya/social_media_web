import { lazy } from "react";

const TopBar = lazy(() => import("./TopBar"));

function Body() {
  return (
    <div className="middle">
      <TopBar />
      <div className="body">
        <div>stories</div>
        <div>postss</div>
      </div>
    </div>
  );
}

export default Body;
