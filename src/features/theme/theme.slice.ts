import { createSlice } from '@reduxjs/toolkit';

export interface iTheme {
  theme: 'light' | 'dark';
}

const initialState: iTheme = {
  theme: 'light'
};

export const theme = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
