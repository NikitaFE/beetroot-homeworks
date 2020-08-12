import React, { useState } from "react";
import MemoizedItem from "./Item";
import Filter from "./Filter";

function ListItems({ title, items, toggleItem, deleteItem }) {
  
  const [searchTerm, setSearchTerm] = useState('');

  const out = items
    .filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(item => <MemoizedItem title={title} item={item} key={item.id} toggleItem={toggleItem} deleteItem={deleteItem} />);

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />

      <ul className="mb-3 p-0">{out}</ul>
    </section>
  );
}

export default ListItems;
