import React from 'react';

import { NavLink } from 'react-router-dom';

import standardPhoto from '../../assets/png/user.png';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { TUserType } from '../../interfaces/Interface';
import { isFollow } from '../../redux/users-slice';

export const User: React.FC<TUserType> = ({ name, id, photos, followed, status }) => {
  const dispatch = useAppDispatch();

  const onFollowClick = (): void => {
    dispatch(isFollow({ id }));
  };

  return (
    <NavLink to={`/profile/${id}`}>
      <div style={{ marginBottom: '5px' }} key={id}>
        <div>{name}</div>
        <div>{status}</div>
        <img
          style={{ width: '50px', height: '50px' }}
          src={photos.small ? photos.small : standardPhoto}
          alt="user"
        />
        <div>{photos.large}</div>
        <div>{followed}</div>
        <button type="button" onClick={onFollowClick}>
          {followed ? 'follow' : 'unfollow'}
        </button>
      </div>
    </NavLink>
  );
};
