import React from 'react';

import { NavLink } from 'react-router-dom';

import { usersAPI } from '../../api/api';
import standardPhoto from '../../assets/png/user.png';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { TUserType } from '../../interfaces/Interface';
import { isFollow, toggleFollowingProgress } from '../../redux/users-slice';

export const User: React.FC<TUserType> = ({ name, id, photos, followed, status }) => {
  const { followingProgress } = useAppSelector(state => state.usersSlice);
  const dispatch = useAppDispatch();

  const onFollowClick = (): void => {
    const fetchData = async (): Promise<void> => {
      dispatch(toggleFollowingProgress({ followingProgress: true, userId: id }));
      try {
        const data = await usersAPI.follow(id);
        if (data.resultCode === 0) {
          dispatch(isFollow({ id }));
          dispatch(toggleFollowingProgress({ followingProgress: false, userId: id }));
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
      dispatch(toggleFollowingProgress({ followingProgress: true, userId: id }));
      try {
        const data = await usersAPI.unFollow(id);
        if (data.resultCode === 0) {
          dispatch(isFollow({ id }));
          dispatch(toggleFollowingProgress({ followingProgress: false, userId: id }));
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
