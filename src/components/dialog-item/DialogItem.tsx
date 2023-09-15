import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import {ROUTERS} from "../../constants/constants";
import {friendsDialogs} from "../message/Message";

import s from "./DialogItem.module.css";

export const DialogItem: React.FC = () => {
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
