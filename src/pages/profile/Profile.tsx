import React from 'react';

import { PostArrayType } from '../../common/state/state';
import { MyPosts } from '../../components/my-posts/MyPosts';
import { ProfileInfo } from '../../components/profile-info/ProfileInfo';

import s from './Profile.module.css';

type ProfilePropsType = {
  postsArray: PostArrayType[];
};

export const Profile: React.FC<ProfilePropsType> = ({ postsArray }) => (
  <div className={s.profile}>
    <ProfileInfo />
    <MyPosts postsArray={postsArray} />
  </div>
);
