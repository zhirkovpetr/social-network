import React from "react";

import {DialogItem} from "../../components/dialog-item/DialogItem";
import {FriendsDialogs} from "../../index";

import s from './Dialogs.module.css';

type DialogsPropsType = {
  friendsDialogs: FriendsDialogs
}

export const Dialogs: React.FC<DialogsPropsType> = ({friendsDialogs}) => {
  return (
    <div className={s.dialogs}>
            <DialogItem friendsDialogs={friendsDialogs}/>
    </div>
  )
}
