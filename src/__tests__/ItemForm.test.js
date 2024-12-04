import { render, screen, fireEvent } from '@testing-library/react';
import ItemForm from '../ItemForm';
import App from '../App';

test('adds a new item to the list when the form is submitted', () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/Item name/);
  const categorySelect = screen.getByDisplayValue('Produce');
  const addButton = screen.getByText(/Add to List/);

  // Initial count of dessert items
  const initialDessertCount = screen.queryAllByText(/Dessert/).length;

  // Fill out the form and submit
  fireEvent.change(nameInput, { target: { value: 'Ice Cream' } });
  fireEvent.change(categorySelect, { target: { value: 'Dessert' } });
  fireEvent.click(addButton);

  // Check that the new item is added
  expect(screen.queryAllByText(/Ice Cream/).length).toBe(1);

  // Check that the dessert count has increased by 1
  expect(screen.queryAllByText(/Dessert/).length).toBe(initialDessertCount + 1);
});
