import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import {ROUTERS} from "../../constants/constants";
import {FriendsDialogs} from "../../index";

import s from "./DialogItem.module.css";

type DialogItemPropsType = {
  friendsDialogs: FriendsDialogs
}

export const DialogItem: React.FC<DialogItemPropsType> = ({friendsDialogs}) => {
  const friends = Object.entries(friendsDialogs).map(([key, friendDialog]) => friendDialog)
  return (
    <>
      <div className={s.dialogsItem}>
        {
          friends.map((friend, index) => {
            return (
              <div className={s.dialog} key={index}>
                <NavLink to={`${ROUTERS.DIALOGS}${friend.link}`} className={({isActive}) => isActive ? s.active : ''}>
                  {friend.name}
                </NavLink>
              </div>
            )
          })
        }
      </div>
      <div className={s.messages}>
        <Outlet/>
      </div>
    </>
  )
}
