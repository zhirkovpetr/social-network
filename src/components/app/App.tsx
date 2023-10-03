import React from 'react';

import {RoadMap} from "../roadmap/RoadMap";
import {FriendsDialogs, PostArrayType} from "../../index";

import s from './App.module.css';

type AppPropsType = {
  postsArray: PostArrayType[]
  friendsDialogs: FriendsDialogs
}

export const App: React.FC<AppPropsType> = ({postsArray, friendsDialogs}) => {
  return (
    <div className={s.appWrapper}>
      <RoadMap postsArray={postsArray} friendsDialogs={friendsDialogs}/>
    </div>
  );
}
