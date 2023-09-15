import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Profile} from "../../pages/profile/Profile";
import {Dialogs} from "../../pages/dialogs/Dialogs";
import {NotFound} from "../../pages/not-found/NotFound";
import {News} from "../../pages/news/News";
import {Music} from "../../pages/music/Music";
import {Settings} from "../../pages/settings/Settings";
import {Message} from "../message/Message";
import {ROUTERS} from "../../constants/constants";
import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";

import s from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route element={<GlobalHeaderNavbar/>}>
          <Route path={ROUTERS.WELCOME} element={<Profile/>}/>
          <Route path={ROUTERS.PROFILE} element={<Profile/>}/>
          <Route path={ROUTERS.DIALOGS} element={<Dialogs/>}>
            <Route path={ROUTERS.DIALOG} element={<Message/>}/>
          </Route>
          <Route path={ROUTERS.NEWS} element={<News/>}/>
          <Route path={ROUTERS.MUSIC} element={<Music/>}/>
          <Route path={ROUTERS.SETTINGS} element={<Settings/>}/>
          <Route path={ROUTERS.NOTFOUND} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}
