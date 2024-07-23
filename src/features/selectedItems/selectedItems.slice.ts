import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { iPerson } from '../../shared/interfaces/start-wars.interface';

export interface iSelectedItems {
  list: iPerson[];
}

const initialState: iSelectedItems = {
  list: []
};

export const selectedItems = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<iPerson>) => {
      if (state.list.find(item => item.name === action.payload.name)) return;
      state.list.push(action.payload);
    },
    removeFromList: (state, action: PayloadAction<iPerson>) => {
      state.list = state.list.filter(item => item.name !== action.payload.name);
    },
    clearList: state => {
      state.list = [];
    }
  }
});

export const { addToList, removeFromList, clearList } = selectedItems.actions;
export default selectedItems.reducer;
