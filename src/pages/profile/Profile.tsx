import React from "react";

import {MyPosts} from "../../components/my-posts/MyPosts";
import {ProfileInfo} from "../../components/profile-info/ProfileInfo";

import s from './Profile.module.css';

export const Profile: React.FC = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  )
}
