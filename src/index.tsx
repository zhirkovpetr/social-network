import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {App} from './components/app/App';

import './index.css';

export type PostArrayType = {
  id: number
  message: string
  likeCount: number
}

const postsArray: PostArrayType[] = [
  {id: 1, message: 'Hi, how are you ?', likeCount: 20},
  {id: 2, message: `It's my first post`, likeCount: 11},
]

type FriendDialogType = {
  name: string;
  link: string;
  messages: MessagesType[];
};

type MessagesType = {
  id: number
  message: string
};

export type FriendsDialogs = {
  [key: string]: FriendDialogType;
};

export const friendsDialogs: FriendsDialogs = {
  '1': {name: 'Alena', link: '1', messages: [{id: 1, message: 'Hi!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
  '2': {name: 'Andrey', link: '2', messages: [{id: 1, message: 'Hello!'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Yo'}]},
  '3': {name: 'Misha', link: '3', messages: [{id: 1, message: 'God morning!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
  '4': {name: 'Dmitriy', link: '4', messages: [{id: 1, message: 'Hello!'}, {id: 2, message: 'How are you?'}, {id: 3, message: 'Yo'}]},
  '5': {name: 'Evgeniy', link: '5', messages: [{id: 1, message: 'God morning!'}, {id: 2, message: 'How is your it-kamasutra?'}, {id: 3, message: 'Yoo'}]},
}

ReactDOM.render(
  <BrowserRouter>
    <App postsArray={postsArray} friendsDialogs={friendsDialogs}/>
  </BrowserRouter>,
  document.getElementById('root')
);
