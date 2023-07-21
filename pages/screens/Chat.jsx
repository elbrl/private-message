import { configureAbly, useChannel, usePresence } from "@ably-labs/react-hooks";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

configureAbly({
  key: "9LIaOg.NYR6qg:rDjNoIFMdvmAYbbc5jPAFuFt3ltA5z3-7J5vil3freI",
  clientId: Date.now() + "",
});

const Chat = () => {
  const { user } = useUser();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [channel] = useChannel("GodPro", (message) => {
    setMessages((prev) => [...prev, message]);
  });
  const [presenceData, updateStatus] = usePresence("GodPro", "initial state");

  async function sendMessage() {
    channel.publish(`${user.username}`, { text, date: Date.now() });
    setText("");
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          height: "80vh",
        }}
      >
        <div
          style={{
            height: "74vh",
            width: "40vh",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "scroll",
          }}
        >
          <div>
            {messages.map((message) => (
              <div className="chat chat-start">
                <div className="chat-bubble">
                  {message.name}: {message.data.text}
                </div>
              </div>
            ))}
          </div>
          <div
            onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : "")}
            style={{
              display: "flex",
              flexDirection: "row",
              position: "fixed",
              zIndex: "10",
              bottom: "12%",
              width: "22.5%",
            }}
          >
            <textarea
              style={{ width: "100vw", height: "17px", padding: "10px" }}
              className="textarea textarea-primary"
              placeholder="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
