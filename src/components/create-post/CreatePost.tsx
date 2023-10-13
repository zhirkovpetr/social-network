import React from 'react';

import { Button } from '../../common/button/Button';
import { PostArrayType } from '../../common/state/state';
import { profileReducer, addPostAC } from '../../reducers/profile-reducer';

// import s from './CreatePost.module.css';

type CreatePostPropsType = {
  postsArray: PostArrayType[];
};

export const CreatePost: React.FC<CreatePostPropsType> = ({ postsArray }) => {
  const newPostValue = React.createRef<HTMLTextAreaElement>();

  const addPostHandler = (): void => {
    if (newPostValue.current) {
      profileReducer(postsArray, addPostAC(newPostValue.current.value));
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
