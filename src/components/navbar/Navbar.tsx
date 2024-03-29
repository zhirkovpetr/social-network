import React, { useEffect } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { ROUTERS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { getUsers } from '../../store/users/users-slice';
import { Ava } from '../ava/Ava';

import s from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, pagesNumber, currentPage } = useAppSelector(state => state.usersSlice);

  useEffect(() => {
    if (users.items.length === 0) {
      dispatch(getUsers({ currentPage, pagesNumber }));
    }
  }, [dispatch]);

  const friends = users.items.slice(0, 3).map(f => (
    <div className={s.sidebarItem} key={f.id}>
      <Ava photos={f.photos.small} />
      <div>{f.name}</div>
    </div>
  ));

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
            to={ROUTERS.USERS}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Друзья
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
        <div className={s.sidebar}>{friends}</div>
      </nav>
    </>
  );
};
