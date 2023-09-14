import React from "react";
import {NavLink} from "react-router-dom";

import {ROUTERS} from "../../constants/constants";

import s from './Navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to={ROUTERS.PROFILE} className={({ isActive }) => isActive ? s.active : ''}>Профиль</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={ROUTERS.DIALOGS.DIALOGS} className={({ isActive }) => isActive ? s.active : ''}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={ROUTERS.NEWS} className={({ isActive }) => isActive ? s.active : ''}>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={ROUTERS.MUSIC} className={({ isActive }) => isActive ? s.active : ''}>Музыка</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={ROUTERS.SETTINGS} className={({ isActive }) => isActive ? s.active : ''}>Настройки</NavLink>
      </div>
    </nav>
  )
}
