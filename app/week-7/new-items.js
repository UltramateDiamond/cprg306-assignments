"use client";

import { useState } from "react";

export default function ProductForm({currentCount, incrementCountFunction, decrementCountFunction, onAddItem}) {

    let buttonStylesInc = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";
    let buttonStylesDec = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    if(currentCount >= 20){
        buttonStylesInc = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }

    if(currentCount <= 1){
        buttonStylesDec = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }

    const [name, setName] = useState("");
    const [productType, setProductType] = useState("");

    const handleNameChange = (event) => setName(event.target.value);

    const handleProductType = (event) => setProductType(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let items = {
        Counter: currentCount,
        Name: name,
        type: productType
        };

        onAddItem(items);

        alert(`
            Count: ${items.Counter}
            Name: ${items.Name}
            Product Type: ${items.type} 
        `);

        setName("");
  };

  return (
    <div className="bg-slate-300 p-5">
            <h2 className="text-2xl">Counter</h2>
            <p className="text-lg">Counter: {currentCount}</p>
            <button id="myButtonInc" onClick={incrementCountFunction} className={buttonStylesInc}>Increment!</button>
            <button id="myButtonDec" className={buttonStylesDec} onClick={decrementCountFunction}>Decrement!</button>
    <form className="bg-orange-200 p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="inline-block w-40">Name</label>
        <input className="bg-slate-300 px-2 py-1 rounded border-gray-500 focus:bg-blue-100" type="text" onChange={handleNameChange} />
      </div>
      <div className="mb-3">
        <label className="inline-block w-40">Product Type</label>
        <select className="bg-slate-300 px-2 py-1 rounded border-gray-500 focus:bg-blue-100" onChange={handleProductType}>
          <option value="Please select contact type"></option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen foods">Frozen foods</option>
          <option value="Canned foods">Canned foods</option>
          <option value="Dry goods">Dry goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    </div>
  );
}