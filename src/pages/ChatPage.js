


import React from 'react';
import { useParams } from 'react-router-dom';
 import ChatHeader from '../components/ChatHeader';
 import ChatBody from '../components/ChatBody';
 import ChatInput from '../components/ChatInput';
import { getMessagesFromLocalStorage, saveMessagesToLocalStorage } from '../utils/localStorage';

import Leonardo from '../assets/leonardo.jpeg'
import marin from '../assets/marin.jpeg'
import pedro from '../assets/pedro.jpeg'


const mockContact = (contactId) => {

  const contacts = [
    { id: 1, name: 'Leonardo Dominguez', avatarUrl: Leonardo, status: 'En Linea' },
    { id: 2, name: 'Martin Leguizamon',  avatarUrl: marin, status: 'En Linea' },
    { id: 3, name: 'Pedro Martinez', avatarUrl: pedro, status: 'Desconectado' },
  ];
  return contacts.find(contact => contact.id === parseInt(contactId, 10)) || {};
};

function ChatPage() {
  const { contactId } = useParams();
  const contact = mockContact(contactId);

  return (
    <div className="chat-page">
      <ChatHeader contact={contact} />
      <ChatBody contactId={contactId} />

      
    </div>

    
  
    
  );
}

export default ChatPage;

