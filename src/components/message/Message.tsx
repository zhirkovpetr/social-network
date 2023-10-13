import React from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../common/button/Button';
import { FriendsMessagesType } from '../../common/state/state';
import { messagesReducer, AddMessageAC } from '../../reducers/messages-reducer';

import s from './Message.module.css';

type MessagePropsType = {
  messages: FriendsMessagesType;
};

export const Message: React.FC<MessagePropsType> = ({ messages }) => {
  const newMessageValue = React.createRef<HTMLTextAreaElement>();
  const params = useParams<'id'>();
  const some = params.id;

  const addMessageHandler = (): void => {
    if (newMessageValue.current) {
      messagesReducer(
        messages,
        AddMessageAC(newMessageValue.current.value, some as string),
      );
      newMessageValue.current.value = '';
    }
  };
  return (
    <>
      {some && messages[some] ? (
        <div className={s.message}>
          {some &&
            messages[some].messages.map(m => (
              <div key={m.id} className={s.messageItem}>
                {m.message}
              </div>
            ))}
        </div>
      ) : (
        <div>error</div>
      )}
      <div className={s.newMessage}>
        <div>
          <textarea ref={newMessageValue} placeholder="введите текст сообщения..." />
        </div>
        <div>
          <Button title="Отправить" onClick={addMessageHandler} />
        </div>
      </div>
    </>
  );
};
