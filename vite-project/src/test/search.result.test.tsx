import { render, screen } from '@testing-library/react';
import SearchResult from '../components/search/search.result';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('SearchResult', () => {
  const setSelectedPhoto = vi.fn();
  const selectedPhoto = { id: '1', title: 'Photo 1', server: 'server1', secret: 'secret1' };
  const handleCloseModal = vi.fn();
  const handleOverlayClick = vi.fn();

  test('renders photo items and opens modal when photo is clicked', () => {
    const photos = [
      { id: '1', title: 'Photo 1', server: 'server1', secret: 'secret1' },
      { id: '2', title: 'Photo 2', server: 'server2', secret: 'secret2' },
    ];
    render(
      <Provider store={store}>
        <SearchResult
          setSelectedPhoto={setSelectedPhoto}
          selectedPhoto={selectedPhoto}
          onCloseModal={handleCloseModal}
          handleOverlayClick={handleOverlayClick}
        />
      </Provider>
    );

    const photoItems = screen.getAllByRole('img');
    expect(photoItems.length).to(2);

    const firstPhotoItem = photoItems[0];
    fireEvent.click(firstPhotoItem);
    const modalTitle = screen.getByText(photos[0].title);
    expect(modalTitle).toBeInTheDocument();
    const modalImage = screen.getByAltText(photos[0].title) as HTMLImageElement;
    expect(modalImage.src).toBe(
      `https://live.staticflickr.com/${photos[0].server}/${photos[0].id}_${photos[0].secret}_b.jpg`
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });
});
