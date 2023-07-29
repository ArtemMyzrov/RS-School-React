import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import FormCards from './formCards';
import React from 'react';
describe('formCard test', () => {
    test('Should show title', () => {
        render(React.createElement(FormCards, { items: [] }));
        expect(React.createElement("h2", null, "Name :")).toBeDefined();
    });
});
