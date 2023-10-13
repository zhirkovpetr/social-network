import React, { ChangeEvent, useReducer, useState } from 'react';

import { useParams } from 'react-router-dom';
import { v1 } from 'uuid';

import { Button } from '../../common/button/Button';
import { AddMessageAC, messagesReducer } from '../../reducers/messages-reducer';

import s from './Message.module.css';

export const Message: React.FC = () => {
  const [newMessage, setMessage] = useState('');
  const params = useParams<'id'>();
  const some = params.id;

  const [friendsMessages, dispatchFriendsMessages] = useReducer(messagesReducer, {
    '1': {
      messages: [
        { id: v1(), message: 'Hi!' },
        { id: v1(), message: 'How is your it-kamasutra?' },
        {
          id: v1(),
          message: 'Yoo',
        },
      ],
    },
    '2': {
      messages: [
        { id: v1(), message: 'Hello!' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'Yo' },
      ],
    },
    '3': {
      messages: [
        { id: v1(), message: 'God morning!' },
        { id: v1(), message: 'How is your it-kamasutra?' },
        {
          id: v1(),
          message: 'Yoo',
        },
      ],
    },
    '4': {
      messages: [
        { id: v1(), message: 'Hello!' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'Yo' },
      ],
    },
    '5': {
      messages: [
        { id: v1(), message: 'God morning!' },
        { id: v1(), message: 'How is your it-kamasutra?' },
        {
          id: v1(),
          message: 'Yoo',
        },
      ],
    },
  });

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.currentTarget.value);
  };

  const addMessageHandler = (): void => {
    if (newMessage) {
      dispatchFriendsMessages(AddMessageAC(newMessage, some as string));
      setMessage('');
    }
  };
  return (
    <>
      {some && friendsMessages[some] ? (
        <div className={s.message}>
          {some &&
            friendsMessages[some].messages.map(m => (
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
          <textarea
            value={newMessage}
            onChange={onChangeMessage}
            placeholder="введите текст сообщения..."
          />
        </div>
        <div>
          <Button title="Отправить" onClick={addMessageHandler} />
        </div>
      </div>
    </>
  );
};
