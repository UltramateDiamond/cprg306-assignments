"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-items';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  return (
    <main className="p-5">
      <h1 className="text-3x1 text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}