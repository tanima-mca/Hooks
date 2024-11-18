
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function Page1useParams() {
    const [data, setData] = useState();
    const [view, setView] = useState('list');

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setData(data.products);
            });
    }, []);

    const toggleView = () => {
        setView((prevView) => (prevView === 'list' ? 'card' : 'list'));
    };

    return (
        <>
            <button onClick={toggleView}>
                Switch to {view === 'list' ? 'Card' : 'List'} View
            </button>
            {view === 'list' ? (
                <ol>
                    {data?.map((item) => (
                        <li key={item.id}>
                            <Link to={`/page2/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ol>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data?.map((item) => (
                        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '150px' }}>
                            <Link to={`/page2/${item.id}`}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}