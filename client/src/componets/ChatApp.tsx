import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { StyledChat, StyledChatContainer } from "./styled/StyledChat";
import axios from "axios";
import { Friend } from "./FriendsList";

const socket = io("http://localhost:4000");

interface Message {
  message: string;
  recipient: string;
  sender: string;
}

interface ChatAppProps {
  friend: Friend | string;
  currentUser: string;
}

const ChatApp: React.FC<ChatAppProps> = ({ friend, currentUser }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [fetchedMessages, setFetchedMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([]);
    setFetchedMessages([]);
  }, [friend, currentUser]);

  const sendMessage = async () => {
    // console.log("Sending message:", message);

    try {
      await axios.post("http://localhost:4000/api/storeMessage", {
        sender: currentUser,
        recipient: friend,
        message: message,
      });

      // Emit the message to the server via socket
      socket.emit("message", {
        sender: currentUser,
        recipient: friend,
        message: message,
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: currentUser,
          recipient: typeof friend === "string" ? friend : friend.username,
          message: message,
        },
      ]);

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    socket.emit("join", currentUser);

    socket.on("message", (data: Message) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("message");
    };
  }, [currentUser]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/retriveMessage",
          {
            params: {
              sender: currentUser,
              friend: friend,
            },
          }
        );
        setFetchedMessages(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }

    fetchMessages();
  }, [friend, currentUser]);

  useEffect(() => {
    setMessages([...fetchedMessages, ...messages]);
  }, [fetchedMessages]);

  return (
    <>
      <h1>Chat with {typeof friend === "string" ? friend : friend.username}</h1>
      <StyledChatContainer>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === currentUser ? "self" : "friend"
              }`}
              style={{ clear: "both" }}
            >
              <div
                className="message-text"
                style={{
                  float: msg.sender === currentUser ? "right" : "left",
                  backgroundColor:
                    msg.sender === currentUser ? "#0084ff" : "#d0d0d0",
                  color: msg.sender === currentUser ? "white" : "black",
                  borderRadius: "15px",
                  padding: "10px 15px",
                  margin: "5px",
                  maxWidth: "70%",
                }}
              >
                {msg.message}
              </div>
              <br />
            </div>
          ))}
        </div>{" "}
      </StyledChatContainer>
      <StyledChat>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </StyledChat>
    </>
  );
};

export default ChatApp;
