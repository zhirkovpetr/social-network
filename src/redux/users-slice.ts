import { createSlice } from '@reduxjs/toolkit';

import { TUsersSliceState } from '../interfaces/interfaces';

export const initialState: TUsersSliceState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    isFollow: (state, action) => ({
      ...state,
      users: state.users.map(u =>
        u.id === action.payload.id ? { ...u, followed: !u.followed } : u,
      ),
    }),
    setUsers: (state, action) => ({
      ...state,
      users: [...state.users, ...action.payload.newUsers],
    }),
  },
});

export const { isFollow, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
