import React from 'react';

import { ActionType, PostArrayType } from '../../common/state/state';
import { MyPosts } from '../../components/my-posts/MyPosts';
import { ProfileInfo } from '../../components/profile-info/ProfileInfo';

import s from './Profile.module.css';

type ProfilePropsType = {
  postsArray: PostArrayType[];
  dispatch: (action: ActionType) => void;
};

export const Profile: React.FC<ProfilePropsType> = ({ postsArray, dispatch }) => (
  <div className={s.profile}>
    <ProfileInfo />
    <MyPosts postsArray={postsArray} dispatch={dispatch} />
  </div>
);
