import React from 'react';
import {Routes, Route} from "react-router-dom";

import {Header} from "../header/Header";
import {Navbar} from "../navbar/Navbar";
import {Profile} from "../../pages/profile/Profile";
import {Dialogs} from "../../pages/dialogs/Dialogs";
import {NotFound} from "../../pages/not-found/NotFound";
import {News} from "../../pages/news/News";
import {Music} from "../../pages/music/Music";
import {Settings} from "../../pages/settings/Settings";
import {ROUTERS} from "../../constants/constants";

import s from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <Header/>
      <Navbar/>
      <div className={s.appWrapperContent}>
        <Routes>
          <Route path={ROUTERS.WELCOME} element={<Profile/>}/>
          <Route path={ROUTERS.PROFILE} element={<Profile/>}/>
          <Route path={ROUTERS.DIALOGS} element={<Dialogs/>}/>
          <Route path={ROUTERS.NEWS} element={<News/>}/>
          <Route path={ROUTERS.MUSIC} element={<Music/>}/>
          <Route path={ROUTERS.SETTINGS} element={<Settings/>}/>
          <Route path={ROUTERS.NOTFOUND} element={<NotFound/>}/>
        </Routes>
      </div>
    </div>

  );
}
