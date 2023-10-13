import { v1 } from 'uuid';

import { FriendsMessagesType } from '../common/state/state';

const ADD_MESSAGE = 'ADD-MESSAGE';

export type ActionType = AddMessageType;

type AddMessageType = ReturnType<typeof AddMessageAC>;

export const messagesReducer = (
  state: FriendsMessagesType,
  action: ActionType,
): FriendsMessagesType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id].messages,
          messages: [
            ...state[action.payload.id].messages,
            { id: v1(), message: action.payload.messageDialogs },
          ],
        },
      };
    }
    default:
      return state;
  }
};

export const AddMessageAC = (messageDialogs: string, id: string) =>
  ({
    type: 'ADD-MESSAGE',
    payload: { messageDialogs, id },
  } as const);
