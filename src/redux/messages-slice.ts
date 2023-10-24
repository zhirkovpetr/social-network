import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { TFriendsMessagesState } from '../interfaces/interfaces';

export const initialState: TFriendsMessagesState = {
  messagesDialogs: {
    '1': {
      messages: [
        { id: v1(), message: 'Hi!' },
        { id: v1(), message: 'How is your it-kamasutra?' },
        {
          id: v1(),
          message: 'Yoo',
        },
      ],
    },
    '2': {
      messages: [
        { id: v1(), message: 'Hello!' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'Yo' },
      ],
    },
    '3': {
      messages: [
        { id: v1(), message: 'God morning!' },
        { id: v1(), message: 'How is your it-kamasutra?' },
        {
          id: v1(),
          message: 'Yoo',
        },
      ],
    },
    '4': {
      messages: [
        { id: v1(), message: 'Hello!' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'Yo' },
      ],
    },
    '5': {
      messages: [
        { id: v1(), message: 'God morning!' },
        { id: v1(), message: 'How is your it-kamasutra?' },
        {
          id: v1(),
          message: 'Yoo',
        },
      ],
    },
  },
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: (
      state,
      action: PayloadAction<{ messageId: string; newMessage: string }>,
    ) => ({
      ...state,
      messagesDialogs: {
        ...state.messagesDialogs,
        [action.payload.messageId]: {
          ...state.messagesDialogs[action.payload.messageId],
          messages: [
            ...state.messagesDialogs[action.payload.messageId].messages,
            { id: v1(), message: action.payload.newMessage },
          ],
        },
      },
    }),
  },
});

export const { addMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
