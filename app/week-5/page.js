"use client"

import { useState } from "react";
import ProductForm from "./new-items";

export default function ProductPage(){

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

    return (
        <main className="p-5">
            <h1 className="text-3x1 text-center">Contact Us!</h1>
            { showForm && (<ProductForm currentCount={counter} incrementCountFunction={incrementCounter} decrementCountFunction={decrementCounter} />)}
            <div>
                <button onClick={toggleForm}>Product Form</button>
            </div>
        </main>
    );
}