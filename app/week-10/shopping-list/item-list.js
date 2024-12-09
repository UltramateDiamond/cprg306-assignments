"use client"

import { useState } from "react";
import Item from "./item"; 


export default function ItemList({items, onItemSelect}){

  const[sortBy, setSortBy] = useState("name");

  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemSelect(item); 
  };


    const sortedItems = [...items].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });

    return(
        <main>
          <div>
            <button
          className={`px-4 py-2 mr-2 ${sortBy === "name" ? "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
         className={`px-4 py-2 ${sortBy === "category" ? "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2" : "bg-gray-200 text-gray-700"
        }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        </div>
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <h3 key={item.id} onClick={() => handleItemClick(item.name)}>
            <Item onSelect={onItemSelect} name={item.name} quantity={item.quantity} category={item.category} />
          </h3>
        ))}
      </ul>
        </main>
    );
}