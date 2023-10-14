import { rootReducer, setupStore } from '../redux/store';

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

export type TProfileSliceState = {
  post: TPostArray[];
};

export type TPostArray = {
  id: string;
  message: string;
  likeCount: number;
};

type TMessage = {
  id: string;
  message: string;
};

type TMessagesDialogs = {
  [key: string]: {
    messages: TMessage[];
  };
};

export type TFriendsMessagesState = {
  messagesDialogs: TMessagesDialogs;
};
