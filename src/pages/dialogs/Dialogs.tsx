import React, {useEffect} from "react";

import {DialogItem} from "../../components/dialog-item/DialogItem";
import {FriendsDialogsType} from "../../common/state/state";

import s from './Dialogs.module.css';
import {useNavigate} from "react-router-dom";
import {ROUTERS} from "../../constants/constants";

type DialogsPropsType = {
  friendsDialogs: FriendsDialogsType
}

export const Dialogs: React.FC<DialogsPropsType> = ({friendsDialogs}) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`${ROUTERS.DIALOGS}${Object.entries(friendsDialogs).slice(0, 3)[0][0]}`)
  }, [navigate])

  return (
    <div className={s.dialogs}>
            <DialogItem friendsDialogs={friendsDialogs}/>
    </div>
  )
}
