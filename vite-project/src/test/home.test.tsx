import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';
import SearchBar from '../components/search/search';

describe('SearchBar component', () => {
  it('should update the search query on input change', () => {
    const setQuery = vi.fn();
    const query = '';
    const handleSearch = vi.fn();

    const { getByPlaceholderText } = render(
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
        handleKeyPress={() => {}}
      />
    );

    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'nature' } });

    expect(setQuery).toHaveBeenCalledTimes(1);
    expect(setQuery).toHaveBeenCalledWith('nature');
  });

  it('should call handleSearch on button click', () => {
    const setQuery = vi.fn();
    const query = 'nature';
    const handleSearch = vi.fn();

    const { getByRole } = render(
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
        handleKeyPress={() => {}}
      />
    );

    const button = getByRole('button');
    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('should call handleSearch on Enter key press', () => {
    const setQuery = vi.fn();
    const query = 'nature';
    const handleSearch = vi.fn();

    const { getByPlaceholderText } = render(
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
        handleKeyPress={() => {}}
      />
    );

    const input = getByPlaceholderText('Search');
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
