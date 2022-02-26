import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items, filterCategory }) {

  const itemsToDisplay = items.filter((item) => {
    if (filterCategory === "All") return true;

    return item.category === filterCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
