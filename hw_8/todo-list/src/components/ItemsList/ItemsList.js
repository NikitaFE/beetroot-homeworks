import React, { useState } from 'react';

import ItemSearch from '../ItemSearch';
import TodoItem from '../TodoItem';

function ItemsList({ todos, title, togglePacked, deleteItem }) {
  const [searchTarget, setSearchTarget] = useState('');

  const searchItems = (todos) => {
    if (searchTarget.length) {
      return todos.filter(todo => todo.label.toLowerCase().includes(searchTarget.toLowerCase()));
    }
    
    return todos; 
  };

  // Слышал, что не гадить подобными выражениями в return хорошая практика)
  const filteredTodos = searchItems(todos);

  const todosDomItems = filteredTodos.map(todo => (
    <li key={todo.id} className="list-group-item d-flex p-0 pl-5">
      <TodoItem 
        {...todo}
        togglePacked={togglePacked}
        deleteItem={deleteItem}
      />
    </li>
  ));

  const todosDomList = todos.length 
    ? (
    <ul className="list-group">
      {todosDomItems}
    </ul>
    ) : null;

  return (
    <div className="col-5">
      <h2>{title}</h2>
      <ItemSearch onSearchTargetChange={setSearchTarget} />
      {todosDomList}
    </div>
  );
};

export default ItemsList;