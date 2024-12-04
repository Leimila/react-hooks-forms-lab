import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  const filteredItems = items.filter(item =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Filter
        search={searchText}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
