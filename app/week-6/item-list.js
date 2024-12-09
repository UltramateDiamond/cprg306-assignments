"use client"

import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList(){

    const[sortBy, setSortBy] = useState("name");

    const sortItems = () => {

        const sortedItems = [...itemsData].sort((a, b) =>{
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

    const renderedItems = sortedItems.map((item) => {
        <Item></Item>
    })

    return(
        <main>
            <p>
                <button className="bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2" onClick={() => setSortBy('name')}>Sort By Name</button>
            </p>
            <p>
                <button className="bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2" onClick={() => setSortBy('category')}>Sort By Category</button>
            </p>
            <ul>
                {sortItems().map((item) => ( 
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} /> 
                    ))}
            </ul>
        </main>
    );
}