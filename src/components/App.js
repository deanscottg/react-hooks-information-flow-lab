import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
import Filter from "./Filter"
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onDarkModeCLick =() =>   { 
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const handleCategoryChange = (event)=>{
    setSelectedCategory(event.target.value)

  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
      isDarkMode = {isDarkMode}
      onDarkModeCLick ={onDarkModeCLick} />
      <ShoppingList filterCategory={selectedCategory}
      items={itemData} />
      <Filter onCategoryChange={handleCategoryChange}/>
    </div>
  );
}

export default App;
