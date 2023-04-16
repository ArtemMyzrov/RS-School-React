import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';
import SearchBar from '../components/search/search';

describe('SearchBar component', () => {
  it('should update the search query on input change', () => {
    const setQuery = vi.fn();

    const { getByPlaceholderText } = render(<SearchBar />);

    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'nature' } });

    expect(setQuery).toHaveBeenCalledTimes(1);
    expect(setQuery).toHaveBeenCalledWith('nature');
  });

  it('should call handleSearch on button click', () => {
    const handleSearch = vi.fn();

    const { getByRole } = render(<SearchBar />);

    const button = getByRole('button');
    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('should call handleSearch on Enter key press', () => {
    const handleSearch = vi.fn();

    const { getByPlaceholderText } = render(<SearchBar />);

    const input = getByPlaceholderText('Search');
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
