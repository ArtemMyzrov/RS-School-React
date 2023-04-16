import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Photo } from './model';

interface SearchState {
  query: string;
  photos: Photo[];
  loading: boolean;
}

const initialState: SearchState = {
  query: localStorage.getItem('query') || '',
  photos: JSON.parse(localStorage.getItem('searchResult') || '[]'),
  loading: false,
};

const API_KEY = '592524de8e2f7300c220b535be2fbb82';
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=10`;

export const fetchPhotos = createAsyncThunk<Photo[], string>(
  'search/fetchPhotos',
  async (tags: string) => {
    const response = await axios.get(`${API_URL}&tags=${tags}`);
    localStorage.setItem('searchResult', JSON.stringify(response.data.photos.photo));

    return response.data.photos.photo;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuerys: (state, action) => {
      state.query = action.payload;
      localStorage.setItem('query', state.query);
    },
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    // setPhotos: (state, action) => {
    //   state.photos = action.payload;
    //   localStorage.setItem('searchResult', JSON.stringify(state.photos));
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setQuerys } = searchSlice.actions;

export const selectPhotos = (state: SearchState) => state.photos;
export const selectLoading = (state: SearchState) => state.loading;
