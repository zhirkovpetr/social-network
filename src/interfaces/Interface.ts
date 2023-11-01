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

type TFriendDialogType = {
  name: string;
  link: string;
};

type TMessagesDialogs = {
  [key: string]: {
    messages: TMessage[];
  };
};

export type TFriendsMessagesState = {
  messagesDialogs: TMessagesDialogs;
};

export type TDialogsSliceState = {
  dialogs: TFriendsDialogsType;
};

export type TFriendsDialogsType = {
  [key: string]: TFriendDialogType;
};

export type TUsersSliceState = {
  users: TUserType[];
};

export type TUserType = {
  id: string;
  firstName: string;
  lastName: string;
  followed: boolean;
  status: string;
  location: {
    city: string;
    country: string;
  };
};
