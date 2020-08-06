import React from 'react';
import './User.css';

const User = ({ name, username, email }) => {
  return (
    <div className="card m-1 p-1">
      <h3>{name}</h3>
      <p>{username}</p>
      <a href={`mailto${email}`}>{email}</a>
    </div>
  );
}

export default User;