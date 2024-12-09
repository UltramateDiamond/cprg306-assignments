"use client"

import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList(){

    const[sortBy, setSortBy] = useState("name");
    const[items, setItems] = useState(itemsData);

    const sortItems = () => {
        const sortedItems = [...items];

        sortedItems.sort((a, b) =>{
            console.log(sortBy);
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'category') {
                return a.name.localeCompare(b.name);
            } else {
                return 'invalid'
            }
        });

        return sortedItems;
    }

    const handleSortByName = () => {
        setSortBy("name");
        setItems(sortItems());
    };

    const handleSortByCategory = () => {
        setSortBy("category");
        setItems(sortItems());
    };

    return(
        <main>
            <p>
                <button className="bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2" onClick={handleSortByName}>Sort By Name</button>
            </p>
            <p>
                <button className="bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2" onClick={handleSortByCategory}>Sort By Category</button>
            </p>
            <ul>
                {sortItems().map((item) => ( 
                    <Item name={item.name} quantity={item.quantity} category={item.category} /> 
                    ))}
            </ul>
        </main>
    );
}