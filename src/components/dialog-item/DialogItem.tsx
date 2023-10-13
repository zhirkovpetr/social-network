import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import { FriendsDialogsType } from '../../common/state/state';
import { ROUTERS } from '../../constants/constants';

import s from './DialogItem.module.css';

type DialogItemPropsType = {
  friendsDialogs: FriendsDialogsType;
};

export const DialogItem: React.FC<DialogItemPropsType> = ({ friendsDialogs }) => {
  const friends = Object.entries(friendsDialogs).map(([, friendDialog]) => friendDialog);

  return (
    <>
      <div className={s.dialogsItem}>
        {friends.map(friend => (
          <div className={s.dialog} key={Number(friend.link)}>
            <NavLink
              to={`${ROUTERS.DIALOGS}${friend.link}`}
              className={({ isActive }) => (isActive ? s.active : '')}
            >
              {friend.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className={s.messages}>
        <Outlet />
      </div>
    </>
  );
};
