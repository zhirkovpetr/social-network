import React from "react";

import {MyPosts} from "../../components/my-posts/MyPosts";
import {ProfileInfo} from "../../components/profile-info/ProfileInfo";
import {PostArrayType} from "../../common/state/state";

import s from './Profile.module.css';

type ProfilePropsType = {
  postsArray: PostArrayType[]
}

export const Profile: React.FC<ProfilePropsType> = ({postsArray}) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts postsArray={postsArray}/>
    </div>
  )
}
