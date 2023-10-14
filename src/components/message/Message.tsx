import React, { ChangeEvent, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Button } from '../../common/button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { addMessages } from '../../redux/messages-slice';

import s from './Message.module.css';

export const Message: React.FC = () => {
  const [newMessage, setMessage] = useState('');
  const { messagesDialogs } = useAppSelector(state => state.messagesSlice);
  const dispatch = useAppDispatch();
  const params = useParams<'id'>();
  const some = params.id;

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.currentTarget.value);
  };

  const addMessageHandler = (): void => {
    if (newMessage) {
      dispatch(addMessages(newMessage /* , some as string */));
      setMessage('');
    }
  };
  return (
    <>
      {some && messagesDialogs[some] ? (
        <div className={s.message}>
          {some &&
            messagesDialogs[some].messages.map(m => (
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
