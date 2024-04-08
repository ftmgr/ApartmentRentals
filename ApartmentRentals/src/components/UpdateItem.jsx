import React, { useState } from 'react';

const UpdateItemForm = ({ item, onSubmit }) => {
    const [itemName, setItemName] = useState(item.name);
    const [itemDescription, setItemDescription] = useState(item.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...item, name: itemName, description: itemDescription });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Item Description"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
            />
            <button type="submit">Update Item</button>
        </form>
    );
};

export default UpdateItemForm;