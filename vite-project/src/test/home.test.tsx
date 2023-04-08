import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import Search from '../components/search';

test('renders Search component', () => {
  render(<Search />);
  const searchInput = screen.getByPlaceholderText('Search');
  const searchButton = screen.getByRole('button', { name: 'Search' });

  expect(searchInput).toBeDefined();
  expect(searchButton).toBeDefined();
});
