export type PostArrayType = {
  id: string;
  message: string;
  likeCount: number;
};

export type FriendDialogType = {
  name: string;
  link: string;
};

type MessagesType = {
  id: string;
  message: string;
};

export type FriendsDialogsType = {
  [key: string]: FriendDialogType;
};

export type FriendsMessageType = {
  messages: MessagesType[];
};

export type FriendsMessagesType = {
  [key: string]: FriendsMessageType;
};

export const friendsDialogs: FriendsDialogsType = {
  '1': { name: 'Alena', link: '1' },
  '2': { name: 'Andrey', link: '2' },
  '3': { name: 'Misha', link: '3' },
  '4': { name: 'Dmitriy', link: '4' },
  '5': { name: 'Evgeniy', link: '5' },
};

export type StateType = {
  dialogs: FriendsDialogsType;
  sidebar: FriendDialogType[];
};

export type StoreType = {
  _state: StateType;
  getState: () => void;
  subscribe: (observer: () => void) => void;
  renderEntireTree: () => void;
};

export const store: StoreType = {
  _state: {
    dialogs: friendsDialogs,
    sidebar: Object.entries(friendsDialogs)
      .slice(0, 3)
      .map(([, friendDialog]) => friendDialog),
  },
  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this.renderEntireTree = observer;
  },
  renderEntireTree() {},
};
