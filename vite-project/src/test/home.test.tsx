import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import Home from '../pages/home';

test('renders home page', () => {
  render(<Home />);
  const homeHeader = screen.getByRole('heading', { name: /Home Page/i });

  expect(homeHeader).toBeDefined();
});
