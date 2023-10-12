import React from "react";
import {createBrowserRouter} from "react-router-dom";

import {App} from "../components/app/App";
import {ROUTERS} from "../constants/constants";
import {Profile} from "../pages/profile/Profile";
import {Dialogs} from "../pages/dialogs/Dialogs";
import {Message} from "../components/message/Message";
import {News} from "../pages/news/News";
import {Music} from "../pages/music/Music";
import {Settings} from "../pages/settings/Settings";
import {NotFound} from "../pages/not-found/NotFound";
import {store} from "../common/state/state";

export const router = createBrowserRouter([
  {
    path: ROUTERS.WELCOME,
    element: <App sidebar={store._state.sidebar}/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: ROUTERS.PROFILE,
        element: (
          <Profile postsArray={store._state.posts} dispatch={store.dispatch.bind(store)}/>
        ),
      },
      {
        path: ROUTERS.DIALOGS,
        element: <Dialogs friendsDialogs={store._state.dialogs}/>,
        children: [
          {
            path: ROUTERS.DIALOG,
            element: (
              <Message messages={store._state.messages} dispatch={store.dispatch.bind(store)}/>
            ),
          },
        ],
      },
      {
        path: ROUTERS.NEWS,
        element: (
          <News/>
        ),
      },
      {
        path: ROUTERS.MUSIC,
        element: (
          <Music/>
        ),
      },
      {
        path: ROUTERS.SETTINGS,
        element: (
          <Settings/>
        ),
      },
    ],
  },
])
