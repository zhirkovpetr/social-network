import React from "react";

import {Post} from "../post/Post";
import {CreatePost} from "../create-post/CreatePost";
import {PostArrayType} from "../../index";

import s from './MyPosts.module.css';

type MyPostsPropsType = {
  postsArray: PostArrayType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsArray}) => {
  return (
    <div className={s.contentPosts}>
      <h3>My posts</h3>
      <CreatePost/>
      <div className={s.myPosts}>
        {postsArray.map((post) => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)}
      </div>
    </div>
  )
}
