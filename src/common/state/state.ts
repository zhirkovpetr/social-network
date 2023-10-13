import { v1 } from 'uuid';

export type PostArrayType = {
  id: string;
  message: string;
  likeCount: number;
};

const postsArray: PostArrayType[] = [
  { id: v1(), message: 'Hi, how are you ?', likeCount: 20 },
  { id: v1(), message: `It's my first post`, likeCount: 11 },
];

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

export const friendsMessages: FriendsMessagesType = {
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
};

type AddPostType = ReturnType<typeof addPostAC>;
type AddMessageType = ReturnType<typeof AddMessageAC>;

export type ActionType = AddPostType | AddMessageType;

export const addPostAC = (newPost: string) =>
  ({
    type: 'ADD-POST',
    payload: { newPost },
  } as const);

export const AddMessageAC = (messageDialogs: string, id: string) =>
  ({
    type: 'ADD-MESSAGE',
    payload: { messageDialogs, id },
  } as const);

export type StateType = {
  posts: PostArrayType[];
  dialogs: FriendsDialogsType;
  messages: FriendsMessagesType;
  sidebar: FriendDialogType[];
};

export type StoreType = {
  _state: StateType;
  getState: () => void;
  subscribe: (observer: () => void) => void;
  renderEntireTree: () => void;
  dispatch: (action: ActionType) => void;
};

export const store: StoreType = {
  _state: {
    posts: postsArray,
    dialogs: friendsDialogs,
    messages: friendsMessages,
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
  dispatch(action: ActionType) {
    if (action.type === 'ADD-POST') {
      this.renderEntireTree();
      return this._state.posts.push({
        id: v1(),
        message: action.payload.newPost,
        likeCount: 0,
      });
    }
    if (action.type === 'ADD-MESSAGE') {
      this.renderEntireTree();
      return {
        ...this._state.messages,
        [action.payload.id]: {
          ...this._state.messages[action.payload.id].messages,
          messages: this._state.messages[action.payload.id].messages.push({
            id: v1(),
            message: action.payload.messageDialogs,
          }),
        },
      };
    }
    return this._state;
  },
};
