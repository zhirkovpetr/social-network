import React from 'react';

import { Button } from '../../common/button/Button';
import { ActionType, addPostAC } from '../../common/state/state';

// import s from './CreatePost.module.css';

type CreatePostPropsType = {
  dispatch: (action: ActionType) => void;
};

export const CreatePost: React.FC<CreatePostPropsType> = ({ dispatch }) => {
  const newPostValue = React.createRef<HTMLTextAreaElement>();

  const addPostHandler = (): void => {
    if (newPostValue.current) {
      dispatch(addPostAC(newPostValue.current.value));
    }
  };

  return (
    <div className="newPosts">
      <div>
        <textarea ref={newPostValue} placeholder="твои новости ..." />
      </div>
      <div>
        <Button title="Отправить" onClick={addPostHandler} />
      </div>
    </div>
  );
};
