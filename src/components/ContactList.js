
import React, { useState } from 'react';
import '../styles/ContactList.css';

import Leonardo from '../assets/leonardo.jpeg'
import marin from '../assets/marin.jpeg'
import pedro from '../assets/pedro.jpeg'


const contacts = [
  { id: 1, name: 'Leonardo Dominguez', lastMessage: 'he amigo como estas?', time: '3:00 PM', avatarUrl: Leonardo },
  { id: 2, name: 'Martin Leguizamon', lastMessage: 'este finde sale joda? jaja', time: '2:30 PM', avatarUrl: marin },
  { id: 3, name: 'Pedro Martinez', lastMessage: 'jaja no podesss', time: '1:45 PM', avatarUrl: pedro },
];

function ContactList({ onSelectContact }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      <input
        type="text"
        placeholder="Buscar Contactos.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="contact-search"
      />
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <div
            key={contact.id}
            className="contact-item"
            onClick={() => onSelectContact(contact)}
          >
            <img
              src={contact.avatarUrl}
              alt={`${contact.name}'s avatar`}
              className="contact-avatar"
            />
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-message">
                <span className="message-text">{contact.lastMessage}</span>
                {/* <span className="message-time">{contact.time}</span> */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-contacts">No se encuentran contactos</div>
      )}
    </div>
  );
}

export default ContactList;



