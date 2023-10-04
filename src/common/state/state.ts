export type PostArrayType = {
  id: number
  message: string
  likeCount: number
}

const postsArray: PostArrayType[] = [
  {id: 1, message: 'Hi, how are you ?', likeCount: 20},
  {id: 2, message: `It's my first post`, likeCount: 11},
]

export type FriendDialogType = {
  name: string;
  link: string;
};

type MessagesType = {
  id: number
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
  '1': { messages: [{id: 1, message: 'Hi!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
  '2': { messages: [{id: 1, message: 'Hello!'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Yo'}]},
  '3': { messages: [{id: 1, message: 'God morning!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
  '4': { messages: [{id: 1, message: 'Hello!'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Yo'}]},
  '5': { messages: [{id: 1, message: 'God morning!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
}

export type StateType= {
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
  state.posts.push({id: state.posts.length + 1, message: postMessage, likeCount: 0})
}

/*export const addMessage = (messageDialogs: string) => {
  const messages = Object.entries(state.messages).map(([key, message]) => message)
  const newId = messages.length + 1
  return {...state.messages, [newId]: {...state.messages[newId].messages, messages: [{id: 1, message: 'XXX'}, ...state.messages[newId].messages]}}
}*/
