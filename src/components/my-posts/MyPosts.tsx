import React from 'react';

import { ActionType, PostArrayType } from '../../common/state/state';
import { CreatePost } from '../create-post/CreatePost';
import { Post } from '../post/Post';

import s from './MyPosts.module.css';

type MyPostsPropsType = {
  postsArray: PostArrayType[];
  dispatch: (action: ActionType) => void;
};

export const MyPosts: React.FC<MyPostsPropsType> = ({ postsArray, dispatch }) => (
  <div className={s.contentPosts}>
    <h3>My posts</h3>
    <CreatePost dispatch={dispatch} />
    <div className={s.myPosts}>
      {postsArray.map(post => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  </div>
);
