import React from 'react';

function ItemsList({ id, label, packed, togglePacked, deleteItem }) {
  return (
    <React.Fragment>
      <div className="flex-grow-1 p-2">
        <input 
          className="mr-2"
          type="checkbox"
          checked={packed}
          onChange={() => togglePacked(id)}
        />
        <span>{label}</span>
      </div>
      <button 
        className="btn btn-secondary"
        onClick={() => deleteItem(id)}
      >
        Remove
      </button>
    </React.Fragment>
  );
};

export default ItemsList;