import {v1} from "uuid";

export type PostArrayType = {
  id: string
  message: string
  likeCount: number
}

const postsArray: PostArrayType[] = [
  {id: v1(), message: 'Hi, how are you ?', likeCount: 20},
  {id: v1(), message: `It's my first post`, likeCount: 11},
]

export type FriendDialogType = {
  name: string;
  link: string;
};

type MessagesType = {
  id: string
  message: string
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
  '1': {name: 'Alena', link: '1'},
  '2': {name: 'Andrey', link: '2'},
  '3': {name: 'Misha', link: '3'},
  '4': {name: 'Dmitriy', link: '4'},
  '5': {name: 'Evgeniy', link: '5'},
}

export const friendsMessages: FriendsMessagesType = {
  '1': {
    messages: [{id: v1(), message: 'Hi!'}, {id: v1(), message: 'How is your it-kamasutra?'}, {
      id: v1(),
      message: 'Yoo'
    }]
  },
  '2': {messages: [{id: v1(), message: 'Hello!'}, {id: v1(), message: 'How are you?'}, {id: v1(), message: 'Yo'}]},
  '3': {
    messages: [{id: v1(), message: 'God morning!'}, {id: v1(), message: 'How is your it-kamasutra?'}, {
      id: v1(),
      message: 'Yoo'
    }]
  },
  '4': {messages: [{id: v1(), message: 'Hello!'}, {id: v1(), message: 'How are you?'}, {id: v1(), message: 'Yo'}]},
  '5': {
    messages: [{id: v1(), message: 'God morning!'}, {id: v1(), message: 'How is your it-kamasutra?'}, {
      id: v1(),
      message: 'Yoo'
    }]
  },
}

export type StateType = {
  posts: PostArrayType[]
  dialogs: FriendsDialogsType
  messages: FriendsMessagesType
  sidebar: FriendDialogType[]
}

export const state: StateType = {
  posts: postsArray,
  dialogs: friendsDialogs,
  messages: friendsMessages,
  sidebar: Object.entries(friendsDialogs).slice(0, 3).map(([key, friendDialog]) => friendDialog)
}

export const addPost = (postMessage: string) => {
  return postsArray.push({id: v1(), message: postMessage, likeCount: 0})
}

export const addMessage = (messageDialogs: string, id: string) => {
  return {
    ...friendsMessages,
    [id]: {
      ...friendsMessages[id].messages,
      messages: friendsMessages[id].messages.push({id: v1(), message: messageDialogs})
    }
  }
}
