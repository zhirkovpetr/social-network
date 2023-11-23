import React from 'react';

import { TResponseGetUser } from '../../interfaces/Interface';

// import s from './Description.module.css';

type TDescriptionProps = {
  profile: TResponseGetUser;
};

export const Description: React.FC<TDescriptionProps> = ({ profile }) => (
  <div className="blockAboutMe">
    <h5>{profile.fullName}</h5>
    <div>{profile.userId}</div>
    {profile.lookingForAJob && <div>{profile.lookingForAJob}</div>}
    {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>}
    {profile.contacts.github && <div>{profile.contacts.github}</div>}
    {profile.contacts.vk && <div>{profile.contacts.vk}</div>}
    {profile.contacts.facebook && <div>{profile.contacts.facebook}</div>}
    {profile.contacts.instagram && <div>{profile.contacts.instagram}</div>}
    {profile.contacts.twitter && <div>{profile.contacts.twitter}</div>}
    {profile.lookingForAJob && <div>{profile.lookingForAJob}</div>}
    {profile.lookingForAJob && <div>{profile.lookingForAJob}</div>}
  </div>
);
