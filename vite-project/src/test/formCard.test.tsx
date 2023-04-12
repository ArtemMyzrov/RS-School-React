import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCards from '../components/form/formCards';
import React from 'react';

describe('FormCards component', () => {
  const items = [
    {
      id: 1,
      inputName: 'John Doe',
      inputDate: '01/01/2000',
      inputCountry: 'USA',
      inputYear: true,
      inputNow: false,
      inputImg: 'https://via.placeholder.com/150',
    },
  ];

  test('renders the item name', () => {
    render(<FormCards items={items} />);
    const itemName = screen.getByText(/Name : John Doe/i);
    expect(itemName).toBeDefined();
  });

  test('renders the item birthday', () => {
    render(<FormCards items={items} />);
    const itemBirthday = screen.getByText(/Birthday : 01\/01\/2000/i);
    expect(itemBirthday).toBeDefined();
  });

  test('renders the testem country', () => {
    render(<FormCards items={items} />);
    const itemCountry = screen.getByText(/From : USA/i);
    expect(itemCountry).toBeDefined();
  });

  test('renders the item age', () => {
    render(<FormCards items={items} />);
    const itemAge = screen.getByText(/Age : adult/i);
    expect(itemAge).toBeDefined();
  });

  test('renders the item status', () => {
    render(<FormCards items={items} />);
    const itemStatus = screen.getByText(/Is it true \? : No =\)/i);
    expect(itemStatus).toBeDefined();
  });
});
