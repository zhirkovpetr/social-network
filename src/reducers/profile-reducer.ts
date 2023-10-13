import { v1 } from 'uuid';

import { PostArrayType } from '../common/state/state';

const ADD_POST = 'ADD-POST';

export type ActionType = AddPostType;

type AddPostType = ReturnType<typeof addPostAC>;

export const profileReducer = (
  state: PostArrayType[],
  action: ActionType,
): PostArrayType[] => {
  switch (action.type) {
    case ADD_POST: {
      return [{ id: v1(), message: action.payload.newPost, likeCount: 0 }, ...state];
    }
    default:
      return state;
  }
};

export const addPostAC = (newPost: string) =>
  ({
    type: ADD_POST,
    payload: { newPost },
  } as const);
