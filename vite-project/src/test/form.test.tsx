import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Form from '../pages/form';
import { Provider } from 'react-redux';
import { createStore } from '../redux/store';

describe('Form component', () => {
  test('should display an error message if the name is not capitalized', () => {
    render(
      <Provider store={createStore()}>
        <Form />
      </Provider>
    );
    const input = screen.getByRole('textbox', { name: /full name/i });
    fireEvent.change(input, { target: { value: 'john doe' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/Full Name/i)).toBeInTheDocument();
  });

  test('should display an error message if the date is not provided', () => {
    render(
      <Provider store={createStore()}>
        <Form />
      </Provider>
    );
    const input = screen.getByLabelText(/date of birth/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
  });

  test('should display an error message if the country is not provided', () => {
    render(
      <Provider store={createStore()}>
        <Form />
      </Provider>
    );
    const select = screen.getByLabelText(/country/i);
    fireEvent.change(select, { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/Choose a country/i)).toBeInTheDocument();
  });
});
describe('Form component', () => {
  test('should add a new item on form submission', () => {
    beforeEach(() => {
      render(
        <Provider store={createStore()}>
          <Form />
        </Provider>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const dateInput = screen.getByLabelText(/date of birth/i);
      const countrySelect = screen.getByLabelText(/country/i);
      const submitButton = screen.getByRole('button', { name: /submit/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
      fireEvent.change(countrySelect, { target: { value: 'US' } });
      fireEvent.click(submitButton);
      expect(screen.getByText(/Thanks we have added your details!/i)).toBeInTheDocument();
      expect(nameInput).toHaveValue('');
      expect(dateInput).toHaveValue('');
      expect(countrySelect).toHaveValue('');
    });
  });
});
