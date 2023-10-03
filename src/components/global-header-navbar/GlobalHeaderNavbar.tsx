import React from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../header/Header";
import {Navbar} from "../navbar/Navbar";
import {FriendDialogType} from "../../common/state/state";

import s from '../app/App.module.css';

type GlobalHeaderNavbarPropsType = {
  sidebar: FriendDialogType[]
}

export const GlobalHeaderNavbar: React.FC<GlobalHeaderNavbarPropsType> = ({sidebar}) => {
  return (
    <>
      <Header/>
      <Navbar sidebar={sidebar}/>
      <div className={s.appWrapperContent}>
        <Outlet/>
      </div>
    </>
  )
}
