import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./ItemList.css";

const ItemList = ({ selectedCategory }) => {
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        const fetchCSV = async (url) => {
            const response = await fetch(url);
            const text = await response.text();
            return new Promise((resolve) => {
                Papa.parse(text, {
                    header: true,
                    complete: (results) => resolve(results.data),
                });
            });
        };

        try {
            const warehouseData = await fetchCSV("/data/local_warehouse.csv");
            const kickstartData = await fetchCSV("/data/kickstart.csv");

            const combinedData = [...warehouseData, ...kickstartData];
            setItems(combinedData);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    const filteredItems = selectedCategory === "All"
        ? items
        : items.filter((item) => item.Category === selectedCategory);

    return (
        <div className="item-list">
            {filteredItems.map((item, index) => (
                <div key={index} className="item-card">
                    <h3>{item.name || "Unnamed Item"}</h3>
                    <p>Price: ${item.price || "N/A"}</p>
                    <p>Discount: {item.discount ? `${(item.discount * 100).toFixed(0)}%` : "0%"}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
