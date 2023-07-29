import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from './cards';
import React from 'react';
describe('cards test', () => {
    test('Should show title', () => {
        render(React.createElement(Cards, null));
        expect(screen.getByText(/Cards/i)).toBeDefined();
    });
});
