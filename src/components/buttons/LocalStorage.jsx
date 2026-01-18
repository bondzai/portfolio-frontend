import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('my_data');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    const handleAdd = newData => {
        const updatedData = [...data, newData];
        setData(updatedData);
        localStorage.setItem('my_data', JSON.stringify(updatedData));
    };

    const handleDelete = index => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
        localStorage.setItem('my_data', JSON.stringify(updatedData));
    };

    return (
        <div>
            <button onClick={() => handleAdd('New Data')}>Add</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocalStorage;
