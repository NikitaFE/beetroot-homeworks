import React, { Component } from 'react';

import './App.css';

import Filter from '../Filter';
import UsersList from '../UsersList';

export default class App extends Component {
  state = {
    users: [],
    sort_by: ''
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch(this.props.URL);
    const usersData = await response.json();
    const newData = await usersData.map(({id, name, username, email}) => ({id, name, username, email}));

    this.setState({users: newData});
  }

  compare(a, b) {
    let comparison = 0;

    if (a > b) {
      comparison = 1;
    } else if (a < b) {
      comparison = -1;
    }
    return comparison;
  }

  changeSortBy = (sortTarget) => {
    this.setState({
      sort_by: sortTarget
    })
  }
  
  sortUsers = () => {
    const { users, sort_by } = this.state;
    
    if(sort_by) {
      users.sort((a, b) => this.compare(a[sort_by], b[sort_by]));
    }
  }
  
  render() {
    this.sortUsers();

    return (
      <div className="app container">
        <Filter changeSortBy={this.changeSortBy} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}
