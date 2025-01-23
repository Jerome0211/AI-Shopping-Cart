import React, { useState } from "react";
import CategoryBar from "./components/CategoryBar";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shopping Categories</h1>
                <CategoryBar onSelectCategory={handleCategorySelect} />
                <ItemList selectedCategory={selectedCategory} />
            </header>
        </div>
    );
}

export default App;
