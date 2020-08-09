import React, { useState } from 'react';

function ItemAddForm({ addNewItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length) {
      addNewItem(text);
      setText('');
    }
  }

  return (
    <form
      className="d-flex mb-3"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control flex-grow-1 mr-2"
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={({target}) => setText(target.value)}
      />
      <button className="btn btn-success">Send</button>
    </form>
  );
}

export default ItemAddForm;
