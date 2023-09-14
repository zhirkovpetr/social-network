import React from "react";

import {ROUTERS} from "../../constants/constants";
import {DialogItem} from "../../components/DialogItem";
import {Message} from "../../components/Message";

import s from './Dialogs.module.css';

const friendsDialogs = [
  {name: 'Alena', link: ROUTERS.DIALOGS.DIALOGS1},
  {name: 'Andrey', link: ROUTERS.DIALOGS.DIALOGS2},
  {name: 'Misha', link: ROUTERS.DIALOGS.DIALOGS3},
  {name: 'Dmitriy', link: ROUTERS.DIALOGS.DIALOGS4},
  {name: 'Evgeniy', link: ROUTERS.DIALOGS.DIALOGS5},
]

const messagesArray = ['Hi!', 'How is your it-kamasutra?', 'Yoo'];

export const Dialogs: React.FC = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {friendsDialogs.map((friend) => <DialogItem name={friend.name} link={friend.link}/>)}
      </div>
      <div className={s.messages}>
        {messagesArray.map(message => <Message message={message}/>)}
      </div>
    </div>
  )
}
