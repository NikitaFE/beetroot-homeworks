import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search(props) {
  const { searchUsers, refreshSearch } = props;

  const [value, setValue] = useState('');

  const handleChange = ({target}) => {
    setValue(target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    searchUsers(value);
    setValue('');
  }

  return (
    <div className="d-flex justify-content-center m-3">
      <h2 className="mr-3">Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          onChange={handleChange}
          value={value}
        />
        <div className="btn-group w-100">
          <button className="btn btn-info col-6">Search</button>
          <button
            className="btn btn-warning col-6"
            type="button"
            onClick={refreshSearch}
          >
            Refresh
          </button>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func,
  refreshSearch: PropTypes.func
}

export default Search;