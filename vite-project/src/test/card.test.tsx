import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/card';
import React from 'react';
import Data from '../components/data.json';

describe('cards test', () => {
  test('Should show title', () => {
    render(<Card product={Data[0]} />);

    expect(screen.getByText(/shanahan.sunny/i)).toBeDefined();
  });
});
