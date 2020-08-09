import React, { useState, useEffect } from 'react';

function ItemSearch({ onSearchTargetChange }) {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    onSearchTargetChange(value);
  });

  return (
    <input
      className="form-control mb-3"
      type="text"
      placeholder="Search task"
      value={value}
      onChange={({target}) => {
        setValue(target.value);
      }}
    />
  );
};

export default ItemSearch;