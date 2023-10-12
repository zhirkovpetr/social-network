import React from "react";
import {useParams} from "react-router-dom";

import {ActionType, AddMessageAC, FriendsMessagesType} from "../../common/state/state";
import {Button} from "../../common/button/Button";

import s from "./Message.module.css";


type MessagePropsType = {
  messages: FriendsMessagesType
  dispatch: (action: ActionType) => void
}

export const Message: React.FC<MessagePropsType> = ({messages, dispatch}) => {
  const newMessageValue = React.createRef<HTMLTextAreaElement>()
  const params = useParams<'id'>()
  const some = params.id

  const addMessageHandler = () => {
    if (newMessageValue.current) {
      dispatch(AddMessageAC(newMessageValue.current.value, some as string))
      newMessageValue.current.value = ''
    }
  }
  return (
    <>
      {some && messages[some]
        ?
        <div className={s.message}>{some && messages[some].messages.map(m => {
          return (
            <div key={m.id} className={s.messageItem}>{m.message}</div>
          )
        })}
        </div>
        : <div>error</div>}
      <div className={s.newMessage}>
        <div><textarea ref={newMessageValue} placeholder={'введите текст сообщения...'}/></div>
        <div><Button title={'Отправить'} onClick={addMessageHandler}/></div>
      </div>
    </>
  )
}
