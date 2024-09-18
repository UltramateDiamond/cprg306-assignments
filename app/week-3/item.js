import ItemList from "./item-list";

export default function Item({Name, Quantity, Category}){

    return( 
        <main className="text-red-600">
            <ul>
                Name: {Name}
            </ul>
            <ul>
                Amount: {Quantity}
            </ul>
            <ul>
                Category: {Category}
            </ul>
        </main>
    );
}