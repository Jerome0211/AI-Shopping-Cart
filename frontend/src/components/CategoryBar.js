import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./CategoryBar.css";

const CategoryBar = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    const loadCategories = async () => {
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
            const allCategories = combinedData.map(
                (item) => item.Category || "Uncategorized"
            );
            const uniqueCategories = ["All", ...new Set(allCategories)];
            setCategories(uniqueCategories);
        } catch (error) {
            console.error("Error loading categories:", error);
        }
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div className="category-bar">
            {categories.map((category, index) => (
                <button
                    key={index}
                    className="category-button"
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryBar;
