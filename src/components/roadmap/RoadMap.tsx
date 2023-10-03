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
import {FriendsDialogs, PostArrayType} from "../../index";

type RoadMapPropsType = {
  postsArray: PostArrayType[]
  friendsDialogs: FriendsDialogs
}

export const RoadMap: React.FC<RoadMapPropsType> = ({postsArray, friendsDialogs}) => {
  return (
    <Routes>
      <Route element={<GlobalHeaderNavbar/>}>
        <Route path={ROUTERS.WELCOME} element={<Navigate to={ROUTERS.PROFILE}/>}/>
        <Route path={ROUTERS.PROFILE} element={<Profile postsArray={postsArray}/>}/>
        <Route path={ROUTERS.DIALOGS} element={<Dialogs  friendsDialogs={friendsDialogs}/>}>
          <Route path={ROUTERS.DIALOG} element={<Message friendsDialogs={friendsDialogs}/>}/>
        </Route>
        <Route path={ROUTERS.NEWS} element={<News/>}/>
        <Route path={ROUTERS.MUSIC} element={<Music/>}/>
        <Route path={ROUTERS.SETTINGS} element={<Settings/>}/>
        <Route path={ROUTERS.NOTFOUND} element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
