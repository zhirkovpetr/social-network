import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersAPI } from '../api/api';
import { errorMessage } from '../common/error-nessage/error-message';
import { TData, TResponseFollow } from '../interfaces/Interface';

import { toggleFollowingProgress } from './users-slice';

type TFollow = { userId: number };

export const follow = createAsyncThunk<TResponseFollow<TData>, TFollow>(
  'users/follow',
  async ({ userId }, { dispatch, rejectWithValue }) => {
    dispatch(toggleFollowingProgress({ followingProgress: true, userId }));
    try {
      const res = await usersAPI.follow(userId);
      dispatch(toggleFollowingProgress({ followingProgress: false, userId }));
      return res.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);

export const unFollow = createAsyncThunk<TResponseFollow<{}>, TFollow>(
  'users/unFollow',
  async ({ userId }, { dispatch, rejectWithValue }) => {
    dispatch(toggleFollowingProgress({ followingProgress: true, userId }));
    try {
      const res = await usersAPI.unFollow(userId);
      dispatch(toggleFollowingProgress({ followingProgress: false, userId }));
      return res.data;
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    }
  },
);
