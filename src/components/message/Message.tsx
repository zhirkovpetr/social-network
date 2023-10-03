import React from "react";
import {useParams} from "react-router-dom";

import {FriendsDialogs} from "../../index";

import s from "./Message.module.css";

type MessagePropsType = {
  friendsDialogs: FriendsDialogs
}

export const Message: React.FC<MessagePropsType> = ({friendsDialogs}) => {
  const params = useParams<'id'>()
  const some = params.id
  return (
    <>
      {some && friendsDialogs[some]
        ? <div className={s.message}>{some && friendsDialogs[some].messages.map(m => m.message)}</div>
        : <div>error</div>}
    </>
  )
}
