import React from "react";

import {Post} from "../post/Post";
import {CreatePost} from "../create-post/CreatePost";

import s from './MyPosts.module.css';

const postsArray = [
  {message: 'Hi, how are you ?', likeCount: 20},
  {message: `It's my first post`, likeCount: 11},
]

export const MyPosts: React.FC = () => {
  return (
    <div className={s.contentPosts}>
      <h3>My posts</h3>
      <CreatePost/>
      <div className={s.myPosts}>
        {postsArray.map(post => <Post message={post.message} likeCount={post.likeCount}/>)}
      </div>
    </div>
  )
}
