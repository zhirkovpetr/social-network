import React from 'react';

import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}
