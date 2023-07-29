import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';
import React from 'react';
import Data from './data.json';
describe('cards test', () => {
    test('Should show title', () => {
        render(React.createElement(Card, { product: Data[0] }));
        expect(screen.getByText(/shanahan.sunny/i)).toBeDefined();
    });
});
