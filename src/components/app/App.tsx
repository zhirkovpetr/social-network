import React from 'react';

import {RoadMap} from "../roadmap/RoadMap";
import {StateType} from "../../common/state/state";

import s from './App.module.css';

type AppPropsType = {
  state: StateType
}

export const App: React.FC<AppPropsType> = ({state}) => {
  return (
    <div className={s.appWrapper}>
      <RoadMap state={state}/>
    </div>
  );
}
