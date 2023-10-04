import React from 'react';

import s from './App.module.css';
import {Outlet} from "react-router-dom";
import {state} from "../../common/state/state";
import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <GlobalHeaderNavbar sidebar={state.sidebar}/>
      </div>
  );
}
