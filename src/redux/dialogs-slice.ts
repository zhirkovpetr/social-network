import { createSlice } from '@reduxjs/toolkit';

import { TDialogsSliceState } from '../interfaces/interfaces';

export const initialState: TDialogsSliceState = {
  dialogs: {
    '1': { name: 'Alena', link: '1' },
    '2': { name: 'Andrey', link: '2' },
    '3': { name: 'Misha', link: '3' },
    '4': { name: 'Dmitriy', link: '4' },
    '5': { name: 'Evgeniy', link: '5' },
  },
};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {},
});

export default dialogsSlice.reducer;
