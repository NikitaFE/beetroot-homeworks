import React from "react";
import "./Item.css";

function Item({ item, toggleItem, deleteItem }) {
  console.log("Rendered");

  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item.id)}
          id={item.id}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {" "}
          {item.value}
        </label>
      </div>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => deleteItem(item.id)}
      >
        Remove
      </button>
    </li>
  );
}

function itemPropsAreEqual(prevProps, nextProps) {
  return prevProps.item.packed === nextProps.item.packed;
}

const MemoizedItem = React.memo(Item, itemPropsAreEqual);

export default MemoizedItem;
