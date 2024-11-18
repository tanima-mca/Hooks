import { useEffect, useState } from "react";

export default function Debounce() {

    const [output, setOutput] = useState([]);
    console.log(output);
    
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setOutput(data.products);
            });
    }, []);

    return (
        <section>
            <p>
                How can you use the useEffect hook to search with debounce before making
                an API call?
            </p>
            {output.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </section>
    );
}

