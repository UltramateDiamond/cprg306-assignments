"use client";

import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-items';
import Meals from './meal-ideas';
import { getUserItems,  addItemToUser} from '../_services/shopping-list-service';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '') 
      .trim(); 
    setSelectedItemName(cleanedName); 
  };

  async function loadItems(user) {
    try {
      if (!user || !user.uid) {
        throw new Error('User ID is not available');
      }
      const items = await getUserItems(user.uid);
  
      setItems(items);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  }

  const ShoppingList = ({ user }) => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      if (user && user.uid) {
        loadItems(user);
      }
    }, [user]);
  };

  const [newItem, setNewItem] = useState('');

  const handleAddItem = async () => {
    if (user && user.uid && newItem.trim() !== '') {
      try {
        const item = {
          name: newItem,
          createdAt: new Date(), 
        };

        const newItemId = await addItemToUser(user.uid, item);

        setItems((prevItems) => [
          ...prevItems,
          { id: newItemId, data: item },
        ]);

        setNewItem('');
      } catch (error) {
        console.error('Error adding new item:', error);
      }
    }
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