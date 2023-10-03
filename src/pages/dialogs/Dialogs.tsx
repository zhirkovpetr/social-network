import React from "react";

import {DialogItem} from "../../components/dialog-item/DialogItem";
import {FriendsDialogsType} from "../../common/state/state";

import s from './Dialogs.module.css';

type DialogsPropsType = {
  friendsDialogs: FriendsDialogsType
}

export const Dialogs: React.FC<DialogsPropsType> = ({friendsDialogs}) => {
  return (
    <div className={s.dialogs}>
            <DialogItem friendsDialogs={friendsDialogs}/>
    </div>
  )
}
