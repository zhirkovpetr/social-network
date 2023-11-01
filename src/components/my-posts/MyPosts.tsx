import React from 'react';

import { TPostArray } from '../../interfaces/Interface';
import { CreatePost } from '../create-post/CreatePost';
import { Post } from '../post/Post';

import s from './MyPosts.module.css';

type MyPostsPropsType = {
  post: TPostArray[];
  addPost: (newPost: string) => void;
};

export const MyPosts: React.FC<MyPostsPropsType> = ({ post, addPost }) => (
  <div className={s.contentPosts}>
    <h3>My posts</h3>
    <CreatePost addPost={addPost} />
    <div className={s.myPosts}>
      {post.map(p => (
        <Post key={p.id} message={p.message} likeCount={p.likeCount} />
      ))}
    </div>
  </div>
);
