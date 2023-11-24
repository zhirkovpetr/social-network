import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { authAPI } from '../../api/api';
import { ROUTERS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { setAuthMe, toggleIsFetching } from '../../redux/auth-slice';

import s from './Header.module.css';

export const Header: React.FC = () => {
  const { isAuth } = useAppSelector(state => state.authSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      dispatch(toggleIsFetching(true));
      try {
        const data = await authAPI.me();
        if (data.resultCode === 0) {
          dispatch(setAuthMe(data.data));
          dispatch(toggleIsFetching(false));
        }
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData().catch(error => {
      console.error(`Error in fetchData: ${error}`);
    });
  }, []);

  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO2SeTQHtzL024EkApdOOoQ1QlTxBsqKCSQ&usqp=CAU"
        alt="logotype"
      />
      <div className={s.loginBlock}>
        <NavLink to={ROUTERS.LOGIN}>{isAuth ? 'logout' : 'login registration'}</NavLink>
      </div>
    </header>
  );
};
