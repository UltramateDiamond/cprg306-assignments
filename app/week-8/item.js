"use client"

import React from "react";

export default function Items({name, quantity, category, onSelect}){

    return(
        <li onClick={() => onSelect(name)} className="cursor-pointer">
            <ul>
                <h1>Name: {name}</h1>
            </ul>
            <ul>
                <h1>Quantity: {quantity}</h1>
            </ul>
            <ul>
                <h1>Category: {category}</h1>
            </ul>
        </li>
    );
}