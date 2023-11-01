import React from 'react';

import { useAppDispatch } from '../../hooks/ReduxHooks';
import { TUserType } from '../../interfaces/Interface';
import { isFollow } from '../../redux/users-slice';

export const User: React.FC<TUserType> = ({
  lastName,
  firstName,
  status,
  followed,
  location,
  id,
}) => {
  const dispatch = useAppDispatch();

  const onFollowClick = (): void => {
    dispatch(isFollow({ id }));
  };

  return (
    <div style={{ marginBottom: '5px' }} key={id}>
      <div>
        {firstName} {lastName}
      </div>
      <div>{status}</div>
      <div>{location.country}</div>
      <div>{location.city}</div>
      <div>{followed}</div>
      <button type="button" onClick={onFollowClick}>
        {followed ? 'follow' : 'unfollow'}
      </button>
    </div>
  );
};
