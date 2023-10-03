import React from "react";
import {useParams} from "react-router-dom";

import s from "./Message.module.css";
import {FriendsDialogsType} from "../../common/state/state";

type MessagePropsType = {
  friendsDialogs: FriendsDialogsType
}

export const Message: React.FC<MessagePropsType> = ({friendsDialogs}) => {
  const params = useParams<'id'>()
  const some = params.id
  return (
    <>
      {some && friendsDialogs[some]
        ? <div className={s.message}>{some && friendsDialogs[some].messages.map(m => {
          return (
            <div key={m.id} style={m.id % 2 == 0 ? {textAlign: 'right'} : {textAlign: 'start'}}>{m.message}</div>
          )
        })}</div>
        : <div>error</div>}
    </>
  )
}
