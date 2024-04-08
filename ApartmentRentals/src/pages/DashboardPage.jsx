import React from 'react';

const DashboardPage = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Dashboard Page</h1>
            <NewItemForm onSubmit={handleAddItem} />
            <ul>
                {items.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default DashboardPage; // Ensure you have this line