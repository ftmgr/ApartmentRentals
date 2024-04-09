import React from 'react';

//show all the items in the list..

const DashboardPage = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>All Houses Available</h1>
            <NewItemForm onSubmit={handleAddItem} />
            <ul>
                {items.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default DashboardPage;