import React, { useState } from 'react';

export default function ArrayStateUpdate() {
    const [foodItems, setFoodItems] = useState([
        { id: 1, name: "Edible Oil" },
        { id: 2, name: "Noodles" },
        { id: 3, name: "Oats" },
        { id: 4, name: "Corn Flakes" },
        { id: 5, name: "Soyahealth" }
    ]);

    const updateItemName = (id, newName) => {
        setFoodItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, name: newName } : item
            )
        );
    };

    return (
        <>
            <h1>Grocery List</h1>
            <ul style={{ background: "pink" }}>
                {foodItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => updateItemName(item.id, `Updated ${item.name}`)}>
                            Update
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
