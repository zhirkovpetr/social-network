import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersAPI } from '../../api/api';
import { errorMessage } from '../../common/error-nessage/error-message';
import { TResponseFollow } from '../../interfaces/Interface';

import { toggleFollowingProgress } from './users-slice';

type TFollow = { userId: number };

export const follow = createAsyncThunk<TResponseFollow & TFollow, TFollow>(
  'users/follow',
  async ({ userId }, { dispatch, rejectWithValue }) => {
    dispatch(toggleFollowingProgress({ followingProgress: true, userId }));
    try {
      const data = await usersAPI.follow(userId);
      return { ...data, userId };
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    } finally {
      dispatch(toggleFollowingProgress({ followingProgress: false, userId }));
    }
  },
);

export const unFollow = createAsyncThunk<TResponseFollow & TFollow, TFollow>(
  'users/unFollow',
  async ({ userId }, { dispatch, rejectWithValue }) => {
    dispatch(toggleFollowingProgress({ followingProgress: true, userId }));
    try {
      const data = await usersAPI.unFollow(userId);
      return { ...data, userId };
    } catch (error) {
      return rejectWithValue(errorMessage(error));
    } finally {
      dispatch(toggleFollowingProgress({ followingProgress: false, userId }));
    }
  },
);
