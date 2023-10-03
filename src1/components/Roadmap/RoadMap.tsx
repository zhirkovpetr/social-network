import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {News} from "../../../src1/pages/news/News";
import {Music} from "../../../src1/pages/music/Music";
import {Settings} from "../../../src1/pages/settings/Settings";

export const RoadMap = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={"/profile"}/>}/>
      <Route path={'/profile'} caseSensitive={false} element={<Profile />}/>
      <Route path={'/message'} caseSensitive={false} element={<Dialogs />}/>
      <Route path={'/news'} caseSensitive={false} element={<News />}/>
      <Route path={'/music'} caseSensitive={false} element={<Music />}/>
      <Route path={'/settings'} caseSensitive={false} element={<Settings />}/>
      <Route path={'/*'} element={<div>Error 404</div>}/>
    </Routes>
  )
}
