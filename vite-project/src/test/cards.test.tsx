import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from '../components/cards';
import React from 'react';

describe('cards test', () => {
  test('Should show title', () => {
    render(<Cards />);

    expect(screen.getByText(/Cards/i)).toBeDefined();
  });
});
