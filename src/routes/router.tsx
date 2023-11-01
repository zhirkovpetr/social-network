import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { App } from '../components/app/App';
import { Message } from '../components/message/Message';
import { ROUTERS } from '../constants/constants';
import { Dialogs } from '../pages/dialogs/Dialogs';
import { Music } from '../pages/music/Music';
import { News } from '../pages/news/News';
import { NotFound } from '../pages/not-found/NotFound';
import { Profile } from '../pages/profile/Profile';
import { Settings } from '../pages/settings/Settings';
import { Users } from '../pages/users/Users';

export const router = createBrowserRouter([
  {
    path: ROUTERS.WELCOME,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTERS.PROFILE,
        element: <Profile />,
      },
      {
        path: ROUTERS.DIALOGS,
        element: <Dialogs />,
        children: [
          {
            path: ROUTERS.DIALOG,
            element: <Message />,
          },
        ],
      },
      {
        path: ROUTERS.USERS,
        element: <Users />,
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
