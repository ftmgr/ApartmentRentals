import React, { useState } from 'react';

const NewItemForm = ({ onSubmit }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: itemName, description: itemDescription });
        setItemName('');
        setItemDescription('');
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
            <button type="submit">Add Item</button>
        </form>
    );
};

export default NewItemForm;