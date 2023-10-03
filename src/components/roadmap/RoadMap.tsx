import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";
import {Message} from "../message/Message";
import {NotFound} from "../../pages/not-found/NotFound";
import {Profile} from "../../pages/profile/Profile";
import {Dialogs} from "../../pages/dialogs/Dialogs";
import {News} from "../../pages/news/News";
import {Music} from "../../pages/music/Music";
import {Settings} from "../../pages/settings/Settings";
import {ROUTERS} from "../../constants/constants";
import {StateType} from "../../common/state/state";

type RoadMapPropsType = {
  state: StateType
}

export const RoadMap: React.FC<RoadMapPropsType> = ({state}) => {
  return (
    <Routes>
      <Route element={<GlobalHeaderNavbar sidebar={state.sidebar}/>}>
        <Route path={ROUTERS.WELCOME} element={<Navigate to={ROUTERS.PROFILE}/>}/>
        <Route path={ROUTERS.PROFILE} element={<Profile postsArray={state.posts}/>}/>
        <Route path={ROUTERS.DIALOGS} element={<Dialogs  friendsDialogs={state.dialogs}/>}>
          <Route path={ROUTERS.DIALOG} element={<Message friendsDialogs={state.dialogs}/>}/>
        </Route>
        <Route path={ROUTERS.NEWS} element={<News/>}/>
        <Route path={ROUTERS.MUSIC} element={<Music/>}/>
        <Route path={ROUTERS.SETTINGS} element={<Settings/>}/>
        <Route path={ROUTERS.NOTFOUND} element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
