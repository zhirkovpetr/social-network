import React from "react";

import s from "./Message.module.css";
import {useParams} from "react-router-dom";

type FriendDialog = {
  name: string;
  link: string;
  messages: string[];
};

type FriendsDialogs = {
  [key: string]: FriendDialog;
};

export const friendsDialogs: FriendsDialogs = {
  '1': {name: 'Alena', link: '1', messages: ['Hi!', 'How is your it-kamasutra?', 'Yoo']},
  '2': {name: 'Andrey', link: '2', messages: ['Hello!', 'How are you?', 'Yo']},
  '3': {name: 'Misha', link: '3', messages: ['God morning!', 'How is your it-kamasutra?', 'Yoo']},
  '4': {name: 'Dmitriy', link: '4', messages: ['Hello!', 'How are you?', 'Yo']},
  '5': {name: 'Evgeniy', link: '5', messages: ['God morning!', 'How is your it-kamasutra?', 'Yoo']},
}

export const Message: React.FC = () => {
  const params = useParams<'id'>()
  const some = params.id
  return (
    <div className={s.message}>{some && friendsDialogs[some].messages.map(m => m)}</div>
  )
}
