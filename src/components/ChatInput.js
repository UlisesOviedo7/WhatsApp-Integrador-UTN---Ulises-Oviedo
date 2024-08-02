import React, { useState } from 'react';
import '../styles/ChatInput.css'; 

function ChatInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <button className="attachment-button">
        <i className="fa fa-paperclip"></i>
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribir mensaje..."
        className="message-input"
      />
      <button className="send-button" onClick={handleSend}>
        <i className="fa fa-paper-plane"></i>
      </button>
    </div>
  );
}

export default ChatInput;





