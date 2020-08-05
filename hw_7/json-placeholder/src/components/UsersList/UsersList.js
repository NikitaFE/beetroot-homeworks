import React from 'react';

import './UsersList.css';

import User from '../User';

const UsersList = ({ users }) => {
  return (
    <ul>
      {
        users.map(({id, ...userInfo}) => (
          <li key={id}>
            <User {...userInfo} />
          </li>
        ))
      }
    </ul>
  );
}

export default UsersList;