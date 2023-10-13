import React from 'react';

import { PostArrayType } from '../../common/state/state';
import { CreatePost } from '../create-post/CreatePost';
import { Post } from '../post/Post';

import s from './MyPosts.module.css';

type MyPostsPropsType = {
  postsArray: PostArrayType[];
};

export const MyPosts: React.FC<MyPostsPropsType> = ({ postsArray }) => (
  <div className={s.contentPosts}>
    <h3>My posts</h3>
    <CreatePost postsArray={postsArray} />
    <div className={s.myPosts}>
      {postsArray.map(post => (
        <Post key={post.id} message={post.message} likeCount={post.likeCount} />
      ))}
    </div>
  </div>
);
