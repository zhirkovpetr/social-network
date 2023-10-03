import React from "react";
import {NavLink} from "react-router-dom";

import {ROUTERS} from "../../constants/constants";

import s from './Navbar.module.css';
import {FriendDialogType} from "../../common/state/state";
import {Ava} from "../ava/Ava";

type NavbarPropsType = {
  sidebar: FriendDialogType[]
}

export const Navbar: React.FC<NavbarPropsType> = ({sidebar}) => {
  return (
    <>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to={ROUTERS.PROFILE} className={({isActive}) => isActive ? s.active : ''}>Профиль</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={ROUTERS.DIALOGS} className={({isActive}) => isActive ? s.active : ''}>Сообщения</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={ROUTERS.NEWS} className={({isActive}) => isActive ? s.active : ''}>Новости</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={ROUTERS.MUSIC} className={({isActive}) => isActive ? s.active : ''}>Музыка</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={ROUTERS.SETTINGS} className={({isActive}) => isActive ? s.active : ''}>Настройки</NavLink>
        </div>
        <div className={s.sidebar}>
          {sidebar.map((f, index) => {
            return (
              <div className={s.sidebarItem}  key={index}>
                <Ava/>
                <div>{f.name}</div>
              </div>
            )
          })}
        </div>
      </nav>

    </>
  )
}
