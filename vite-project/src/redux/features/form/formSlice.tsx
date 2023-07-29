import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  fullName: string;
  DOB: string;
  country: string;
  ageVerification: boolean;
  now: string;
  file: FileList | undefined | null;
}

const initialState: FormState = {
  fullName: '',
  DOB: '',
  country: '',
  ageVerification: false,
  now: '',
  file: null,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setDOB: (state, action: PayloadAction<string>) => {
      state.DOB = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setAgeVerification: (state, action: PayloadAction<boolean>) => {
      state.ageVerification = action.payload;
    },
    setNow: (state, action: PayloadAction<string>) => {
      state.now = action.payload;
    },
    setFile: (state, action: PayloadAction<FileList>) => {
      state.file = action.payload;
    },
    resetForm: (state) => {
      state.fullName = '';
      state.DOB = '';
      state.country = '';
      state.ageVerification = false;
      state.now = '';
      state.file = null;
    },
  },
});

export const { setFullName, setDOB, setCountry, setAgeVerification, setNow, setFile, resetForm } =
  formSlice.actions;

export default formSlice.reducer;
