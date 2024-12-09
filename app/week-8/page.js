"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-items';
import itemsData from './items.json';
import Meals from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Date.now().toString() }]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '') 
      .trim(); 
    setSelectedItemName(cleanedName); 
  };

  return (
    <main className="p-5">
      <h1 className="text-3x1 text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <Meals ingredients={selectedItemName} />
    </main>
  );
}