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
  isFetching: false,
  followingProgress: [],
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
    toggleIsFetching: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }),
    toggleFollowingProgress: (state, action) => ({
      ...state,
      followingProgress: action.payload.followingProgress
        ? [action.payload.userId, ...state.followingProgress]
        : state.followingProgress.filter(id => action.payload.userId !== id),
    }),
  },
});

export const {
  isFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
} = usersSlice.actions;
export default usersSlice.reducer;
