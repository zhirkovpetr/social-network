import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { TProfileSliceState, TResponseGetUser } from '../interfaces/Interface';

export const initialState: TProfileSliceState = {
  profile: null as TResponseGetUser | null,
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
    setUser: (state, action) => ({
      ...state,
      profile: { ...action.payload },
    }),
  },
});

export const { addPost, setUser } = profileSlice.actions;
export default profileSlice.reducer;
