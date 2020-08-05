import React from 'react';
import './User.css';

const User = ({ name, username, email }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{username}</p>
      <a href={`mailto${email}`}>{email}</a>
    </>
  );
}

export default User;