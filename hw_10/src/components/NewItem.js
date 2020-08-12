import React, { useState } from "react";
// import { generate as id } from "shortid";

function NewItem({ addItem }) {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addItem(value);
    setValue('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input
            className="form-control mb-3"
            type="text"
            onChange={({ target }) => setValue(target.value)}
            value={value}
          />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
}

export default NewItem;
