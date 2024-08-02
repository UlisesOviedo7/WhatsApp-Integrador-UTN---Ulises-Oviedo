import React from 'react';
import '../styles/ChatHeader.css'; 


function ChatHeader({ contact }) {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <img
          src={contact.avatarUrl}
          alt={`${contact.name}'s avatar`}
          className="chat-avatar"
        />
        <div className="chat-header-info">
          <h2 className="chat-header-name">{contact.name}</h2>
          <span className="chat-header-status">{contact.status}</span>
        </div>
        
      </div>
      <div className="chat-header-right">
        <button className="chat-header-button">
          <i className="fa fa-phone"></i>
        </button>
        <button className="chat-header-button">
          <i className="fa fa-video-camera"></i>
        </button>
        <button className="chat-header-button">
          <i className="fa fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
