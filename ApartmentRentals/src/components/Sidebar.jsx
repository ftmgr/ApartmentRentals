import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50" style={{ display: "flex", flexDirection: "row" }}>
            <aside>
                <ul>
                    <li>Search</li>
                    <li>Filter</li>
                    <li>Sort</li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;