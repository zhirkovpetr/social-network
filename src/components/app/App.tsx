import React, {useEffect} from 'react';
import {Outlet, Navigate, useNavigate} from "react-router-dom";

import {state} from "../../common/state/state";
import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";

import s from './App.module.css';
import {ROUTERS} from "../../constants/constants";

export const App: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(ROUTERS.PROFILE)
  }, [navigate])

  return (
    <div className={s.appWrapper}>
      <GlobalHeaderNavbar sidebar={state.sidebar}/>
      <div className={s.appWrapperContent}>
        <Outlet/>
      </div>
      </div>
  );
}
