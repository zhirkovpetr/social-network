import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import {StateType} from "../../common/state/state";
import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";

import s from './App.module.css';
import {ROUTERS} from "../../constants/constants";

type AppStateType = {
  state: StateType
}

export const App: React.FC<AppStateType> = ({state}) => {
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
