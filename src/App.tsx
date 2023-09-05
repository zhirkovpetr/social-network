import React from 'react';

import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
//import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";

import s from './App.module.css';


export const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header/>
      <Navbar/>
      {/*<div className={s.appWrapperContent}><Profile /></div>*/}
      <div className={s.appWrapperContent}><Dialogs /></div>
    </div>
  );
}
