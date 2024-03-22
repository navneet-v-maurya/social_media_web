//Modules import
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

//styles import
import "../../../styles/Chat.css";

//component imports
const ChatBox = lazy(() => import("./ChatBox"));
const Inbox = lazy(() => import("./Inbox"));

const ChatPage = () => {
  return (
    <div className="chat-route">
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/:id" element={<ChatBox />} />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
      <ChatBox />
    </div>
  );
};

export default ChatPage;
