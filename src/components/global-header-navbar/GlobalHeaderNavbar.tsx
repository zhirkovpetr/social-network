import React from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../header/Header";
import {Navbar} from "../navbar/Navbar";

import s from '../app/App.module.css';

export const GlobalHeaderNavbar: React.FC = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <div className={s.appWrapperContent}>
        <Outlet/>
      </div>
    </>
  )
}
