import React from 'react';
import axios, { Axios, AxiosResponse } from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Search from '../components/search';
import { vi } from 'vitest';
import { D, T } from 'vitest/dist/types-5872e574';

vi.mock('axios');

interface MockedResponseData {
  photos: {
    photo: {
      id: string;
      title: string;
      secret: string;
      server: string;
      url: string;
    }[];
  };
}

describe('Search component', () => {
  it('should render without error', async () => {
    const { getByText, getByPlaceholderText } = render(<Search />);

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

    const { getByText, getByPlaceholderText } = render(<Search />);
    const input = getByPlaceholderText('Search');
    const button = getByText('Search');

    fireEvent.change(input, { target: { value: 'cats' } });
    fireEvent.click(button);

    await waitFor(() => getByText('Photo 1'));
    expect(getByText('Photo 1')).toBeDefined();
    expect(getByText('Photo 2')).toBeDefined();
  });
});
