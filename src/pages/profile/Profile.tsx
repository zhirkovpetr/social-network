import React from "react";

import {MyPosts} from "../../components/my-posts/MyPosts";
import {ProfileInfo} from "../../components/profile-info/ProfileInfo";
import {PostArrayType, state} from "../../common/state/state";

import s from './Profile.module.css';

type ProfilePropsType = {
  postsArray: PostArrayType[]
  addPost: (newPost: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({postsArray, addPost}) => {
  console.log(state)
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts postsArray={postsArray} addPost={addPost}/>
    </div>
  )
}
