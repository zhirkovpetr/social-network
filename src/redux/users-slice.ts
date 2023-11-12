import { createSlice } from '@reduxjs/toolkit';

import { TUsersSliceState } from '../interfaces/Interface';

export const initialState: TUsersSliceState = {
  users: {
    items: [],
    totalCount: 30,
    error: null,
  },
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
        items: [...state.users.items, ...action.payload],
      },
    }),
  },
});

export const { isFollow, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
