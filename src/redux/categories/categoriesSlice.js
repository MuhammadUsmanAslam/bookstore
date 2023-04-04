import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesSlice: [],
  isLoading: true,
  status: 'Under Construction',
};

const categoriesSlice = createSlice(
  {
    name: 'categoriesSlice',
    initialState,
    reducers: {
      checkStatus: (state) => {
        if (state.isLoading) {
          return 'Under Construction';
        }
        return 'Constructed successfully';
      },
    },
  },
);

export const { checkStatus, status } = categoriesSlice.actions;

export default categoriesSlice.reducer;
