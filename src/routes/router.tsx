import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { store } from '../common/state/state';
import { App } from '../components/app/App';
import { Message } from '../components/message/Message';
import { ROUTERS } from '../constants/constants';
import { Dialogs } from '../pages/dialogs/Dialogs';
import { Music } from '../pages/music/Music';
import { News } from '../pages/news/News';
import { NotFound } from '../pages/not-found/NotFound';
import { Profile } from '../pages/profile/Profile';
import { Settings } from '../pages/settings/Settings';

export const router = createBrowserRouter([
  {
    path: ROUTERS.WELCOME,
    element: <App sidebar={store._state.sidebar} />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTERS.PROFILE,
        element: <Profile postsArray={store._state.posts} />,
      },
      {
        path: ROUTERS.DIALOGS,
        element: <Dialogs friendsDialogs={store._state.dialogs} />,
        children: [
          {
            path: ROUTERS.DIALOG,
            element: <Message messages={store._state.messages} />,
          },
        ],
      },
      {
        path: ROUTERS.NEWS,
        element: <News />,
      },
      {
        path: ROUTERS.MUSIC,
        element: <Music />,
      },
      {
        path: ROUTERS.SETTINGS,
        element: <Settings />,
      },
    ],
  },
]);
