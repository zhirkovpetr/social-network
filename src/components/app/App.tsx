import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import {FriendDialogType} from "../../common/state/state";
import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";
import {ROUTERS} from "../../constants/constants";

import s from './App.module.css';

type AppStateType = {
  sidebar: FriendDialogType[]
}

export const App: React.FC<AppStateType> = ({sidebar}) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(ROUTERS.PROFILE)
  }, [navigate])

  return (
    <div className={s.appWrapper}>
      <GlobalHeaderNavbar sidebar={sidebar}/>
      <div className={s.appWrapperContent}>
        <Outlet/>
      </div>
      </div>
  );
}
