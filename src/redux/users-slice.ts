import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { usersAPI } from '../api/api';
import { errorMessage } from '../common/error-nessage/error-message';
import { TResponseGetUsers, TUsersSliceState } from '../interfaces/Interface';

import { follow, unFollow } from './users-thunk';

type TRequestGetUsers = {
  currentPage: number;
  pagesNumber: number;
};

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

export const getUsers = createAsyncThunk<TResponseGetUsers, TRequestGetUsers>(
  'users/getUsers',
  async (body, { rejectWithValue }) => {
    try {
      return await usersAPI.getUsers(body.currentPage, body.pagesNumber);
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    /* isFollow: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        items: state.users.items.map(u =>
          u.id === action.payload.id ? { ...u, followed: !u.followed } : u,
        ),
      },
    }), */
    /*    setUsers: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        items: [...action.payload],
      },
    }), */
    /*    setTotalCount: (state, action) => ({
      ...state,
      users: {
        ...state.users,
        totalCount: action.payload,
      },
    }), */
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload.page,
    }),
    /*    toggleIsFetching: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }), */
    toggleFollowingProgress: (state, action) => ({
      ...state,
      followingProgress: action.payload.followingProgress
        ? [action.payload.userId, ...state.followingProgress]
        : state.followingProgress.filter(id => action.payload.userId !== id),
    }),
  },
  extraReducers: builder => {
    builder.addCase(getUsers.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users.items = [...action.payload.items];
      state.users.totalCount = action.payload.totalCount;
      state.isFetching = false;
    });
    builder.addCase(getUsers.rejected, state => {
      state.isFetching = true;
    });

    builder.addCase(follow.fulfilled, (state, action) => {
      state.users = {
        ...state.users,
        items: state.users.items.map(u =>
          u.id === action.payload.data.id ? { ...u, followed: !u.followed } : u,
        ),
      };
    });
    builder.addCase(unFollow.fulfilled, (state, action) => {
      state.users = {
        ...state.users,
        items: state.users.items.map(u =>
          u.id === action.payload.data ? { ...u, followed: !u.followed } : u,
        ),
      };
    });
  },
});

export const { setCurrentPage, toggleFollowingProgress } = usersSlice.actions;
export default usersSlice.reducer;
