import React, { useState } from "react";
import { generate as id } from "shortid";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

function App() {
  const [items, setItems] = useState(defaultState);
  
  const addItem = value =>
    setItems(items => [{ id: id(), value, packed: false }, ...items]);

  const toggleItem = id =>
    setItems(items => items.map(item => (
      item.id === id ? { ...item, packed: !item.packed } : item
    )));

  const deleteItem = id =>
    setItems(items => (
      items.filter(item => item.id !== id)
    ));

  const makeAllUnpacked = () =>
    setItems(items => (
      items.map(item =>
        item.packed ? { ...item, packed: false } : item
      )
    ));

  const packedItems = items.filter(item => item.packed);
  const unPackedItems = items.filter(item => !item.packed);

  return (
    <div className="container py-3">
      <NewItem addItem={addItem} />
      <div className="row">
        <div className="col-md-5">
          <ListItems title="Unpacked Users" items={unPackedItems} toggleItem={toggleItem} deleteItem={deleteItem} />
        </div>
        <div className="offset-md-2 col-md-5">
          <ListItems title="Packed Users" items={packedItems} toggleItem={toggleItem} deleteItem={deleteItem} />
          <button
            onClick={makeAllUnpacked}
            className="btn btn-danger btn-lg btn-block"
          >
            Mark All As Unpacked
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
