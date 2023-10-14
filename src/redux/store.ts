import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';

import { TRootState } from '../interfaces/Interfaces';

import messagesSlice from './messages-slice';
import profileSlice from './profile-slice';

export const rootReducer = combineReducers({
  profileSlice,
  messagesSlice,
});

export const setupStore = (): Store<TRootState> =>
  configureStore({
    reducer: rootReducer,
  });
