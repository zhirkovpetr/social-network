import React, { useReducer } from 'react';

import { v1 } from 'uuid';

import { MyPosts } from '../../components/my-posts/MyPosts';
import { ProfileInfo } from '../../components/profile-info/ProfileInfo';
import { addPostAC, profileReducer } from '../../reducers/profile-reducer';

import s from './Profile.module.css';

export const Profile: React.FC = () => {
  const [post, dispatchPost] = useReducer(profileReducer, [
    { id: v1(), message: 'Hi, how are you ?', likeCount: 20 },
    { id: v1(), message: `It's my first post`, likeCount: 11 },
  ]);

  const addPost = (newPost: string): void => {
    dispatchPost(addPostAC(newPost));
  };

  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts post={post} addPost={addPost} />
    </div>
  );
};
