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
  messages: MessagesType[];
};

type MessagesType = {
  id: number
  message: string
};

export type FriendsDialogsType = {
  [key: string]: FriendDialogType;
};

export const friendsDialogs: FriendsDialogsType = {
  '1': {name: 'Alena', link: '1', messages: [{id: 1, message: 'Hi!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
  '2': {name: 'Andrey', link: '2', messages: [{id: 1, message: 'Hello!'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Yo'}]},
  '3': {name: 'Misha', link: '3', messages: [{id: 1, message: 'God morning!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
  '4': {name: 'Dmitriy', link: '4', messages: [{id: 1, message: 'Hello!'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Yo'}]},
  '5': {name: 'Evgeniy', link: '5', messages: [{id: 1, message: 'God morning!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
}

export type StateType= {
  posts: PostArrayType[]
  dialogs: FriendsDialogsType
  sidebar: FriendDialogType[]
}

export const state: StateType = {
  posts: postsArray,
  dialogs: friendsDialogs,
  sidebar: Object.entries(friendsDialogs).slice(0, 3).map(([key, friendDialog]) => friendDialog)
}
