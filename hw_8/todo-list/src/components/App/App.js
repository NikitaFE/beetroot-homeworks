import React, { useState } from 'react';

import Header from '../Header';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import ItemsList from '../ItemsList';

function App() {
  const todoMocks = [
    { id: 1, label: 'Make best React app', packed: true },
    { id: 2, label: 'Pants', packed: false },
    { id: 3, label: 'MacBook', packed: false },
    { id: 4, label: 'Hat', packed: true },
    { id: 5, label: 'Passport' , packed: false }
  ];

  const [todos, setTodos] = useState(todoMocks);
  
  const addNewItem = (label) => {
    const newTodos = [{id: Date.now(), label, packed: false},...todos];

    setTodos(newTodos);
  }

  const deleteItem = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    
    setTodos(newTodos);
  };
 
  const togglePacked = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, packed: !todo.packed} : todo);
    
    setTodos(newTodos);
  };

  const markAllAs = (markTarget) => {
    const newTodos = todos.map(todo => markTarget === 'packed'
      ? {...todo, packed: true} : {...todo, packed: false});

    setTodos(newTodos);
  };
  
  const unpackedList = todos.filter(todo => !todo.packed);
  const packedList = todos.filter(todo => todo.packed);

  return (
    <div className="pt-3">
      <Header addNewItem={addNewItem} />
      <div className="d-flex justify-content-between mb-3">
        {
          // С HOC-ами было бы симпатичнее, но я их пока не осилил
        }
        <ItemsList
          title="Unpacked Items"
          todos={unpackedList}
          togglePacked={togglePacked}
          deleteItem={deleteItem} 
        />
        <ItemsList
          title="Packed Items"
          todos={packedList}
          togglePacked={togglePacked}
          deleteItem={deleteItem} 
        />
      </div>
      <ToggleButtons markAllAs={markAllAs} />
    </div>
  );
}

export default App;
