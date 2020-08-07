import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const User = ({ name, username, email }) => {
  return (
    <div className="card m-1 p-1">
      <h3>{name}</h3>
      <p>{username}</p>
      <a href={`mailto${email}`}>{email}</a>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string
};

export default User;