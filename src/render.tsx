import ReactDOM from 'react-dom';
import {RouterProvider} from "react-router-dom";

import {router} from "./routes/router";

import './index.css';
import {StateType} from "./common/state/state";


export const renderEntireTree = () => {
  ReactDOM.render(
    <RouterProvider router={router} />,
  document.getElementById('root')
)
}
