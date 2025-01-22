import React from 'react';
import './CategoryBar.css';

const categories = ["Electronics", "Books", "Clothing", "Groceries"];

function CategoryBar({ onSelectCategory }) {
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
}

export default CategoryBar;
