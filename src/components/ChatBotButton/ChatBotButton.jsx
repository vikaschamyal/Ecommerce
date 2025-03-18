import React, { useState } from "react";
import "./ChatBotButton.css";
import { BsChatDotsFill } from "react-icons/bs";

const ChatBotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="chatbot-container">
      {/* Floating Chat Button */}
      <button className="chatbot-button" onClick={() => setIsChatOpen(!isChatOpen)}>
        <BsChatDotsFill size={24} />
      </button>

      {/* Chat Window (Toggle on click) */}
      {isChatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Shopping Assistant</h4>
            <button className="chatbot-close" onClick={() => setIsChatOpen(false)}>✖</button>
          </div>
          <div className="chatbot-body">
            <p>👋 Hello! How can I assist you with your shopping today?</p>
            {/* Add more chat UI or integrate a chatbot API */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotButton;
