import React from 'react';

import ItemAddForm from '../ItemAddForm';

function Header({ addNewItem }) {
  return (
    <header>
      <h1>TODO list:</h1>
      <ItemAddForm addNewItem={addNewItem} />
    </header>
  );
}

export default Header;
