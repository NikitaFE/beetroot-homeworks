import React from "react";

function Filter({ searchTerm, onChange }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
}

export default Filter;
