import React from 'react';
import ContactList from '../components/ContactList';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  const handleSelectContact = (contact) => {
   
    navigate(`/chat/${contact.id}`);
  };

  return (
    <div className="home-page">
      <div className="home-header">
        <h2>Lista de contactos</h2>
      </div>
      <ContactList onSelectContact={handleSelectContact} />
    </div>
  );
}

export default HomePage;
