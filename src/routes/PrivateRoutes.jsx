//module imports
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//component imports
const HomePage = lazy(() => import("../components/screens/home/HomePage"));
const ChatPage = lazy(() => import("../components/screens/chat/ChatPage"));
const ProfilePage = lazy(() =>
  import("../components/screens/profile/ProfilePage")
);
const LeftSideBar = lazy(() => import("../components/common/LeftSideBar"));
const BottomBar = lazy(() => import("../components/common/BottomBar"));

const PrivateRoutes = () => {
  return (
    <div className="main">
      <LeftSideBar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="chat/*" element={<ChatPage />} />
        <Route path="Profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <BottomBar />
    </div>
  );
};

export default PrivateRoutes;
