import React from 'react';

import { MyPosts } from '../../components/my-posts/MyPosts';
import { ProfileInfo } from '../../components/profile-info/ProfileInfo';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { addPost } from '../../redux/profile-slice';

import s from './Profile.module.css';

export const Profile: React.FC = () => {
  const { post } = useAppSelector(state => state.profileSlice);
  const dispatch = useAppDispatch();

  const addPostHandler = (newPost: string): void => {
    dispatch(addPost({ newPost }));
  };

  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts post={post} addPost={addPostHandler} />
    </div>
  );
};
