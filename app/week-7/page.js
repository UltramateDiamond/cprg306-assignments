"use client"

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import ItemList from "./item-list";
import ProductForm from "./new-items";
import itemsData from './items.json';

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        if (showForm) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    }

    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        let currentCount = counter;
        setCounter(currentCount + 1);
    }
    const decrementCounter = () => {
        let currentCount = counter;
        setCounter(currentCount - 1);
    }

    const handleAddItem = (ProductForm) => {
        console.log('ProductForm before adding:', ProductForm);
        setItems((prevItems) => [...prevItems, { ...ProductForm, id: uuidv4() }]);
    };

    return(
        <main className="p-5">
            <h1 className="text-3x1 text-center">Contact Us!</h1>
            { showForm && (<ProductForm currentCount={counter} incrementCountFunction={incrementCounter} decrementCountFunction={decrementCounter} onAddItem={handleAddItem}/>)}
            <div>
                <button onClick={toggleForm}>Product Form</button>
            </div>
            <h1>
                Shopping List
                <ItemList items={items}/>
            </h1>
        </main>
    );
}