import React from "react";

import {Post} from "../post/Post";
import {CreatePost} from "../create-post/CreatePost";
import {PostArrayType} from "../../common/state/state";

import s from './MyPosts.module.css';

type MyPostsPropsType = {
  postsArray: PostArrayType[]
  addPost: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({postsArray, addPost}) => {

  return (
    <div className={s.contentPosts}>
      <h3>My posts</h3>
      <CreatePost addPost={addPost}/>
      <div className={s.myPosts}>
        {postsArray.map((post) => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>)}
      </div>
    </div>
  )
}
