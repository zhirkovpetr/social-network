import {Navigate, Route, Routes} from "react-router-dom";

import {GlobalHeaderNavbar} from "../global-header-navbar/GlobalHeaderNavbar";
import {Message} from "../message/Message";
import {NotFound} from "../../pages/not-found/NotFound";
import {Profile} from "../../pages/profile/Profile";
import {Dialogs} from "../../pages/dialogs/Dialogs";
import {News} from "../../pages/news/News";
import {Music} from "../../pages/music/Music";
import {Settings} from "../../pages/settings/Settings";
import {ROUTERS} from "../../constants/constants";

export const RoadMap = () => {
  return (
    <Routes>
      <Route element={<GlobalHeaderNavbar/>}>
        <Route path={ROUTERS.WELCOME} element={<Navigate to={ROUTERS.PROFILE}/>}/>
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
  )
}
