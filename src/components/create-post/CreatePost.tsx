import React, { ChangeEvent, useState } from 'react';

import { Button } from '../../common/button/Button';

// import s from './CreatePost.module.css';

type CreatePostPropsType = {
  addPost: (newPost: string) => void;
};

export const CreatePost: React.FC<CreatePostPropsType> = ({ addPost }) => {
  const [newPost, setNewPost] = useState('');

  const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewPost(e.currentTarget.value);
  };

  const addPostHandler = (): void => {
    if (newPost) {
      addPost(newPost);
    }
  };

  return (
    <div className="newPosts">
      <div>
        <textarea
          value={newPost}
          onChange={onChangePost}
          placeholder="твои новости ..."
        />
      </div>
      <div>
        <Button title="Отправить" onClick={addPostHandler} />
      </div>
    </div>
  );
};
