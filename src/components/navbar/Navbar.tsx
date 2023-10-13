import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { FriendDialogType } from '../../common/state/state';
import { ROUTERS } from '../../constants/constants';
import { Ava } from '../ava/Ava';

import s from './Navbar.module.css';

type NavbarPropsType = {
  sidebar: FriendDialogType[];
};

export const Navbar: React.FC<NavbarPropsType> = ({ sidebar }) => {
  const location = useLocation();
  const messageActive = location.pathname.split('/')[1];
  return (
    <>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
            to={ROUTERS.PROFILE}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Профиль
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={ROUTERS.DIALOGS}
            className={messageActive === 'dialogs' ? s.active : ''}
          >
            Сообщения
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={ROUTERS.NEWS}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Новости
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={ROUTERS.MUSIC}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Музыка
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to={ROUTERS.SETTINGS}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Настройки
          </NavLink>
        </div>
        <div className={s.sidebar}>
          {sidebar.map(f => (
            <div className={s.sidebarItem} key={Number(f.link)}>
              <Ava />
              <div>{f.name}</div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};
