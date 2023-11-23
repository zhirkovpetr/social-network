import React from 'react';

import userAvatar from '../../assets/png/user.png';

import s from './Ava.module.css';

type TAvaProps = {
  photos: string | null;
};

export const Ava: React.FC<TAvaProps> = ({ photos }) => (
  <>
    <img className={s.ava} src={photos || userAvatar} alt={userAvatar} />
  </>
);
