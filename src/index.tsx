import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {App} from './components/app/App';

import './index.css';
import {state} from "./common/state/state";

ReactDOM.render(
  <BrowserRouter>
    <App state={state}/>
  </BrowserRouter>,
  document.getElementById('root')
);
