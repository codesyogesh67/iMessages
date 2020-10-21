import React from "react";
import "./Imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export default function Imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}
