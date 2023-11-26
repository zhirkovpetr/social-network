import { createSlice } from '@reduxjs/toolkit';

import { TAuthSliceState } from '../interfaces/Interface';

export const initialState: TAuthSliceState = {
  data: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
  isFetching: false,
  resultCode: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthMe: (state, action) => ({
      ...state,
      data: action.payload,
      isAuth: true,
    }),
    toggleIsFetching: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }),
  },
});

export const { setAuthMe, toggleIsFetching } = authSlice.actions;
export default authSlice.reducer;
