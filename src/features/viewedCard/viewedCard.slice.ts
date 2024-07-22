import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { iPerson } from '../../shared/interfaces/start-wars.interface';

export interface viewedState {
  list: iPerson[];
}

const initialState: viewedState = {
  list: []
};

export const viewedSlice = createSlice({
  name: 'viewed',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<iPerson>) => {
      if (state.list.find(item => item.name === action.payload.name)) {
        state.list = state.list.filter(
          item => item.name !== action.payload.name
        );
      } else {
        state.list.push(action.payload);
      }
    },

    selectAll: (state, action: PayloadAction<iPerson[]>) => {
      action.payload.forEach(item => {
        if (!state.list.find(i => i.name === item.name)) {
          state.list.push(item);
        }
      });
    },

    clearList: (state, action: PayloadAction<iPerson[]>) => {
      state.list = state.list.filter(item => !action.payload.includes(item));
    },

    clearAll: state => {
      state.list = [];
    },

    removeItem: (state, action: PayloadAction<iPerson>) => {
      state.list = state.list.filter(item => item.name !== action.payload.name);
    }
  }
});

// Action creators are generated for each case reducer function
export const { addItem, selectAll, clearList, removeItem } =
  viewedSlice.actions;

export default viewedSlice.reducer;
