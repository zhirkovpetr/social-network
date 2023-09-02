import React from "react";

import {Post} from "./post/Post";
import {CreatePost} from "./create-post/CreatePost";

import s from './MyPosts.module.css';

export const MyPosts = () => {
  return (
    <div className={'contentPosts'}>
      <h5>My posts</h5>
      <CreatePost/>
      <div className={'myPosts'}>
        <Post message={'Hi, how are you ?'} likeCount={20}/>
        <Post message={`It's my first post`} likeCount={11}/>
      </div>
    </div>
  )
}
