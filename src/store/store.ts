import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import dialogsSlice from './dialogs-slice';
import messagesSlice from './messages-slice';
import profileSlice from './profile/profile-slice';
import { usersSlice } from './users';

export const rootReducer = combineReducers({
  profileSlice,
  messagesSlice,
  dialogsSlice,
  usersSlice,
  authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
