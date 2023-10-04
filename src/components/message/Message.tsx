import React from "react";
import {useParams} from "react-router-dom";

import {FriendsMessagesType} from "../../common/state/state";
import {Button} from "../../common/button/Button";

import s from "./Message.module.css";


type MessagePropsType = {
  messages: FriendsMessagesType
  addPost: (messagePost: string) => void
}

export const Message: React.FC<MessagePropsType> = ({messages, addPost}) => {
  const newMessageValue = React.createRef<HTMLTextAreaElement>()
  const params = useParams<'id'>()
  const some = params.id

  const addMessageHandler = () => {
    if (newMessageValue.current) {
      addPost(newMessageValue.current.value)
    }
  }

  return (
    <>
      {some && messages[some]
        ?
        <div className={s.message}>{some && messages[some].messages.map(m => {
          return (
            <div key={m.id} style={m.id % 2 == 0 ? {textAlign: 'right'} : {textAlign: 'start'}}>{m.message}</div>
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
