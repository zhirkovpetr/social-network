import React from 'react';

import {RoadMap} from "../roadmap/RoadMap";

import s from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={s.appWrapper}>
      <RoadMap />
    </div>
  );
}
