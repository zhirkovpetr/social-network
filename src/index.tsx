import React from 'react';
import ReactDOM from 'react-dom';
import {RouterProvider} from "react-router-dom";

import {router} from "./routes/router";

import './index.css';

const renderEntireTree = () => {
  ReactDOM.render(
    <RouterProvider router={router}/>,
    document.getElementById('root')
  );
}

renderEntireTree()
