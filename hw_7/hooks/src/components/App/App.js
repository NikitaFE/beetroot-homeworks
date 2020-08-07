import React, { useState, useEffect } from 'react';

import './App.css';

import Filter from '../Filter';
import UsersList from '../UsersList';
import Search from '../Search';

function App() {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);
  const [unfilteredData, setUnfilteredData] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(URL);
    const usersData = await response.json();
    const newData = await usersData.map(({id, name, username, email}) => ({id, name, username, email}));

      setUsers(newData);
      setUnfilteredData(newData);
  }

  const compare = (a, b) => {
    let comparison = 0;

    if (a > b) {
      comparison = 1;
    } else if (a < b) {
      comparison = -1;
    }
    return comparison;
  }

  const changeSortBy = (sortTarget) => {
    setSortBy(sortTarget);
  }
  
  const sortUsers = () => {
    if(sortBy.length > 0) {
      users.sort((a, b) => compare(a[sortBy], b[sortBy]));
    }
  }

  const searchUsers = (searchTarget) => {
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTarget.toLowerCase()));
    
    setUsers(filteredUsers);
  }

  const refreshSearch = () => {
    setUsers(unfilteredData);
  }
  
  sortUsers();

  return (
    <div className="app container">
      <Search searchUsers={searchUsers} refreshSearch={refreshSearch} />
      <Filter changeSortBy={changeSortBy} />
      <UsersList users={users} />
    </div>
  );
}

export default App;