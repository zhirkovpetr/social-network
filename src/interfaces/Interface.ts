import { rootReducer, setupStore } from '../redux/store';

export type TRootState = ReturnType<typeof rootReducer>;
// export type TAppStore = ReturnType<typeof setupStore>;
export type TAppStore = typeof setupStore;
export type TAppDispatch = TAppStore['dispatch'];

export type TProfileSliceState = {
  profile: TResponseGetUser | null;
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
  photos: TPhotos;
  status: string | null;
  followed: boolean;
};

export type TResponseGetUsers = {
  items: TItemType[];
  totalCount: number;
  error: string | null;
};

export type TPhotos = {
  small: string | null;
  large: string | null;
};

type TContacts = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type TResponseGetUser = {
  aboutMe: string;
  contacts: TContacts;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: TPhotos;
  userId: string;
};

export type TUsersSliceState = {
  users: TResponseGetUsers;
  pagesNumber: number;
  currentPage: number;
  isFetching: boolean;
  followingProgress: number[];
};

export type TData = {
  id: number | null;
  login: string | null;
  email: string | null;
};

export type TResponseGetAuth = {
  data: TData;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};

export type TAuthSliceState = {
  data: TData;
  isAuth: boolean;
  isFetching: boolean;
  resultCode: number;
};

export type TResponseFollow<D> = {
  resultCode: number;
  messages: string[];
  data: D;
};
