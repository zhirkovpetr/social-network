import { rootReducer, setupStore } from '../redux/store';

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

export type TProfileSliceState = {
  post: TPostArray[];
};

export type TUserType = {
  name: string;
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
  status: string | null;
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

export type TItemType = {
  name: string;
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

export type TResponseGetUsers = {
  items: TItemType[];
  totalCount: number;
  error: string | null;
};

export type TUsersSliceState = {
  users: TResponseGetUsers;
  pagesNumber: number;
  currentPage: number;
};
