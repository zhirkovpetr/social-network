import React from 'react';

import { NavLink } from 'react-router-dom';

import standardPhoto from '../../assets/png/user.png';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { TUserType } from '../../interfaces/Interface';
import { follow, unFollow } from '../../store/users/users-thunk';

export const User: React.FC<TUserType> = ({ name, id, photos, followed, status }) => {
  const { followingProgress } = useAppSelector(state => state.usersSlice);
  const dispatch = useAppDispatch();

  const onFollowClick = (): void => {
    dispatch(follow({ userId: id }));
  };

  const onUnFollowClick = (): void => {
    dispatch(unFollow({ userId: id }));
  };

  return (
    <div style={{ marginBottom: '5px' }} key={id}>
      <NavLink to={`/profile/${id}`}>
        <div>{name}</div>
        <div>{status}</div>
        <img
          style={{ width: '50px', height: '50px' }}
          src={photos.small ? photos.small : standardPhoto}
          alt="user"
        />
        <div>{photos.large}</div>
        <div>{followed}</div>
      </NavLink>
      <button
        type="button"
        onClick={followed ? onUnFollowClick : onFollowClick}
        disabled={followingProgress.some(userId => userId === id)}
      >
        {followed ? 'unfollow' : 'follow'}
      </button>
    </div>
  );
};
