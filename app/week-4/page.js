"use client"

import { useState } from "react";
import Counter from "./new-items"

export default function CounterPage() {

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
        <main>
            <Counter currentCount={counter} incrementCountFunction={incrementCounter} decrementCountFunction={decrementCounter} />
        </main>
    );
}