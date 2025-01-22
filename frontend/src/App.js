import React, { useState } from "react";
import CategoryBar from "./components/CategoryBar";
import "./App.css";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log(`Selected Category: ${category}`);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shopping Categories</h1>
                <CategoryBar onSelectCategory={handleCategorySelect} />
                <p>Currently Selected: {selectedCategory}</p>
            </header>
        </div>
    );
}

export default App;
