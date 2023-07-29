import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './form';
import React from 'react';

describe('cards test', () => {
  beforeEach(() => {
    render(<Form />);
  });

  test('should show title all the time', () => {
    expect(screen.getByText(/Full Name/i)).toBeDefined();
  });

  test('should not show the content at the start', () => {
    expect(screen.getByText(/Upload Image:/i)).toBeDefined();
  });
});
