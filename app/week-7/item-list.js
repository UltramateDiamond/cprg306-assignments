"use client"

import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList(){

    const[sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });

    return(
        <main>
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
            <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
        </main>
    );
}