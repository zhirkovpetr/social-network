import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { ROUTERS } from '../../constants/constants';
import { GlobalHeaderNavbar } from '../global-header-navbar/GlobalHeaderNavbar';

import s from './App.module.css';

export const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTERS.PROFILE);
  }, [navigate]);

  return (
    <div className={s.appWrapper}>
      <GlobalHeaderNavbar />
      <div className={s.appWrapperContent}>
        <Outlet />
      </div>
    </div>
  );
};
