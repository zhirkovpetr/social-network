import React from 'react';

import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import { store } from './common/state/state';
import { router } from './routes/router';

import './index.css';

const renderEntireTree = (): void => {
  ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));
};

renderEntireTree();

store.subscribe(renderEntireTree);
