import React from 'react';

import { NavLink } from 'react-router-dom';

import { usersAPI } from '../../api/user-api';
import standardPhoto from '../../assets/png/user.png';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { TUserType } from '../../interfaces/Interface';
import { isFollow } from '../../redux/users-slice';

export const User: React.FC<TUserType> = ({ name, id, photos, followed, status }) => {
  const dispatch = useAppDispatch();

  const onFollowClick = (): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await usersAPI.follow(id);
        if (res.data.resultCode === 0) {
          dispatch(isFollow({ id }));
        }
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData().catch(error => {
      console.error(`Error in fetchData: ${error}`);
    });
  };

  const onUnFollowClick = (): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await usersAPI.unFollow(id);
        if (res.data.resultCode === 0) {
          dispatch(isFollow({ id }));
        }
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData().catch(error => {
      console.error(`Error in fetchData: ${error}`);
    });
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
      <button type="button" onClick={followed ? onUnFollowClick : onFollowClick}>
        {followed ? 'unfollow' : 'follow'}
      </button>
    </div>
  );
};
