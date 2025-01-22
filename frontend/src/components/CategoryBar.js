import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./CategoryBar.css";

const CategoryBar = ({ onSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    // 从 CSV 文件加载数据并提取类别
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
            // 加载 kickstart.csv 和 local warehouse.csv 数据
            const kickstartData = await fetchCSV("/data/kickstart.csv");
            const warehouseData = await fetchCSV("/data/local_warehouse.csv");

            // 合并两个数据集
            const combinedData = [...kickstartData, ...warehouseData];

            // 提取所有类别
            const allCategories = combinedData.map(
                (item) => item.Category || item.category || "Uncategorized"
            );

            // 去重并添加 "All" 选项
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
