import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatName, selectChatId } from "../features/chatSlice";
import db from "../firebase";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

export default function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uuid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h3>
          To: <span className="chat__name">{chatName}</span>
        </h3>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} id={id} contents={data} />
          ))}
        </FlipMove>
        <div ref={messagesEndRef} />
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
          />
          <IconButton>
            <MicNoneIcon className="chat__mic" />
          </IconButton>

          <button onClick={sendMessage} className="chat__submitButton">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
