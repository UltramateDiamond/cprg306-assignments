

export default function Counter({currentCount, incrementCountFunction, decrementCountFunction}) {

    let buttonStylesInc = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";
    let buttonStylesDec = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 rounded text-white mt-5 px-4 py-2";

    if(currentCount >= 20){
        buttonStylesInc = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }

    if(currentCount <= 1){
        buttonStylesDec = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }
        


    return (
        <div className="bg-slate-300 p-5">
            <h2 className="text-2xl">Counter</h2>
            <p className="text-lg">Counter: {currentCount}</p>
            <button onClick={incrementCountFunction} className={buttonStylesInc}>Increment!</button>
            <button className={buttonStylesDec} onClick={decrementCountFunction}>Decrement!</button>
        </div>
    );
}