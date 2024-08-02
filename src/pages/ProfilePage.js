import React, { useState } from 'react';
import '../styles/ProfilePage.css';

import ulises from '../assets/ulises.png'


const user = {
  name: 'Ulises',
  status: 'Estas son mis convicciones, si no te gusta tengo otras..',
  avatarUrl: ulises
};

function ProfilePage() {
  const [name, setName] = useState(user.name);
  const [status, setStatus] = useState(user.status);

  const handleSave = () => {
    
    alert('perfil guardado!');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Perfil</h1>
      </div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={user.avatarUrl} alt="Profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="profile-status">
            <textarea
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status"
            />
          </div>
          <button className="save-button" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
