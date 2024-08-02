

import React, { useState, useEffect } from 'react';
import { getMessagesFromLocalStorage, saveMessagesToLocalStorage, initializeMessagesIfNeeded } from '../utils/localStorage';
import '../styles/ChatBody.css'; 

function ChatBody({ contactId }) {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    
    initializeMessagesIfNeeded(contactId);

    
    const messages = getMessagesFromLocalStorage(contactId);
    setMessageList(messages);
  }, [contactId]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = { id: Date.now(), text: message, sender: 'me', time: 'Now' };
      const updatedMessages = [...messageList, newMessage];
      
      
      setMessageList(updatedMessages);
      saveMessagesToLocalStorage(contactId, updatedMessages);
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
    <div className="chat-body">
      <div className="chat-messages">
        {messageList.map(msg => (
          <div
            key={msg.id}
            className={`message ${msg.sender === 'me' ? 'message-me' : 'message-contact'}`}
          >
            <div className="message-text">{msg.text}</div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribir un mensaje..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default ChatBody;
