import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { TProfileSliceState } from '../interfaces/Interfaces';

export const initialState: TProfileSliceState = {
  post: [
    { id: v1(), message: 'Hi, how are you ?', likeCount: 20 },
    { id: v1(), message: `It's my first post`, likeCount: 11 },
  ],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state, action) => ({
      ...state,
      post: [{ id: v1(), message: action.payload.newPost, likeCount: 0 }, ...state.post],
    }),
  },
});

export const { addPost } = profileSlice.actions;
export default profileSlice.reducer;
