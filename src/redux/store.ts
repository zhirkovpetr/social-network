import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';

import { TRootState } from '../interfaces/interfaces';

import dialogsSlice from './dialogs-slice';
import messagesSlice from './messages-slice';
import profileSlice from './profile-slice';
import usersSlice from './users-slice';

export const rootReducer = combineReducers({
  profileSlice,
  messagesSlice,
  dialogsSlice,
  usersSlice,
});

export const setupStore = (): Store<TRootState> =>
  configureStore({
    reducer: rootReducer,
  });
