import React from 'react';

import './UsersList.css';

import User from '../User';

const UsersList = ({ users }) => {
  return (
    <ul className="d-flex flex-wrap">
      {
        users.map(({id, ...userInfo}) => (
          <li className="col-4" key={id}>
            <User {...userInfo} />
          </li>
        ))
      }
    </ul>
  );
}

export default UsersList;