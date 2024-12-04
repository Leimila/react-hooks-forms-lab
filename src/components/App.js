import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'Milk', category: 'Dairy' },
    { id: 2, name: 'Bananas', category: 'Produce' },
    { id: 3, name: 'Ice Cream', category: 'Dessert' },
  ]);

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
