import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesSlice: [],
  isLoading: true,
  status: 'N/A',
};

const categoriesSlice = createSlice(
  {
    name: 'categoriesSlice',
    initialState,
    reducers: {
      checkStatus: (state) => ({
        ...state,
        status: 'Under Construction',
      }),
    },
  },
);

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
