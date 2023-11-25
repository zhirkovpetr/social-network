import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import dialogsSlice from './dialogs-slice';
import messagesSlice from './messages-slice';
import profileSlice from './profile-slice';
import usersSlice from './users-slice';

export const rootReducer = combineReducers({
  profileSlice,
  messagesSlice,
  dialogsSlice,
  usersSlice,
  authSlice,
});

/* export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  }); */

export const setupStore = configureStore({
  reducer: rootReducer,
});
