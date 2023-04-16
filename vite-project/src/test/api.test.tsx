import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Search from '../pages/home';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

vi.mock('axios');

describe('Search component', () => {
  it('should render without error', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(getByPlaceholderText('Search')).toBeDefined();
    expect(getByText('Search')).toBeDefined();
  });

  it('should search photos and display them', async () => {
    const data = {
      photos: {
        photo: [
          {
            id: '1',
            title: 'Photo 1',
            secret: 'secret',
            server: 'server',
            url: 'https://url.com',
          },
          {
            id: '2',
            title: 'Photo 2',
            secret: 'secret',
            server: 'server',
            url: 'https://url.com',
          },
        ],
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data,
    } as AxiosResponse);

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = getByPlaceholderText('Search');
    const button = getByText('Search');

    fireEvent.change(input, { target: { value: 'cats' } });
    fireEvent.click(button);

    await waitFor(() => getByText('Photo 1'));
    expect(getByText('Photo 1')).toBeDefined();
    expect(getByText('Photo 2')).toBeDefined();
  });
});
