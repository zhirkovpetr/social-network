import { createSlice } from '@reduxjs/toolkit';

import { TUsersSliceState } from '../interfaces/Interface';

export const initialState: TUsersSliceState = {
  users: {
    items: [],
    totalCount: 0,
    error: null,
  },
  pagesNumber: 5,
  currentPage: 1,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    isFollow: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        items: state.users.items.map(u =>
          u.id === action.payload.id ? { ...u, followed: !u.followed } : u,
        ),
      },
    }),
    setUsers: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        items: [...action.payload],
      },
    }),
    setTotalCount: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        totalCount: action.payload,
      },
    }),
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload.page,
    }),
  },
});

export const { isFollow, setUsers, setCurrentPage, setTotalCount } = usersSlice.actions;
export default usersSlice.reducer;
