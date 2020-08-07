import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    value: ''
  }

  handleChange = ({target}) => {
    this.setState({
      value: target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchUsers(this.state.value);
    this.setState({
      value: ''
    });
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="d-flex justify-content-center m-3">
        <h2 className="mr-3">Search</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control mb-2"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div className="btn-group w-100">
            <button className="btn btn-info col-6">Search</button>
            <button
              className="btn btn-warning col-6"
              type="button"
              onClick={this.props.refreshSearch}
            >
              Refresh
            </button>
          </div>
        </form>
      </div>
    );
  }
}
